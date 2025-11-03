import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      vehicleId,
      startDate,
      startTime,
      endDate,
      endTime,
      name,
      phone,
      address,
      useDelivery,
      additionalDriver,
      additionalName,
      additionalPhone,
      coupon
    } = body;

    // 환경 변수 확인
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.EMAIL_TO;

    if (!emailUser || !emailPass || !emailTo) {
      return NextResponse.json(
        { error: "이메일 설정이 완료되지 않았습니다." },
        { status: 500 }
      );
    }

    // 차량 정보 찾기 (간단한 매핑)
    const vehicleMap: { [key: string]: { name: string; category: string } } = {
      '2026_carnival': { name: '2026 카니발', category: '승합차' },
      'carnival_van': { name: '카니발 밴', category: '승합차' },
      'staria_van': { name: '스타리아 밴', category: '승합차' },
      'starex_van': { name: '스타렉스 밴', category: '승합차' },
      '2026_sorento': { name: '2026 쏘렌토', category: 'SUV' },
      'sorento_suv': { name: '쏘렌토 SUV', category: 'SUV' },
      'palisade_suv': { name: '팰리세이드 SUV', category: 'SUV' },
      'santafe_tm_suv': { name: '싼타페 TM SUV', category: 'SUV' },
      'sportage_hybrid_suv': { name: '스포티지 하이브리드 SUV', category: 'SUV' },
      'avante_cn7_midsize': { name: '아반떼 CN7 중형', category: '중형' },
      'k5_dl3_fullsize': { name: 'K5 DL3 대형', category: '준형' },
      'sonata_dn8_fullsize': { name: '쏘나타 DN8 준형', category: '준형' },
      'morning_compact': { name: '모닝 소형', category: '경차' },
      'ray_compact': { name: '레이 소형', category: '경차' },
      'benz_e200_large': { name: '벤츠 E200 수입대형', category: '수입대형' },
      'genesis_g80_large': { name: '제네시스 G80 대형', category: '대형' },
    };

    const vehicleInfo = vehicleMap[vehicleId] || { name: '선택된 차량 없음', category: '' };

    // Gmail SMTP 설정 (앱 비밀번호 사용)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass, // Gmail 앱 비밀번호 필수!
      },
      secure: true,
      port: 465,
    });

    // 이메일 내용 구성
    const mailOptions = {
      from: emailUser,
      to: emailTo,
      subject: `[차렌터카] 새로운 예약 접수 - ${name}님`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            🚗 새로운 예약이 접수되었습니다
          </h2>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">고객 정보</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">이름:</td>
                <td style="padding: 8px 0; color: #6b7280;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">연락처:</td>
                <td style="padding: 8px 0; color: #6b7280;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">주소:</td>
                <td style="padding: 8px 0; color: #6b7280;">${address}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">예약 정보</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">차량:</td>
                <td style="padding: 8px 0; color: #6b7280;">${vehicleInfo.name} (${vehicleInfo.category})</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">대여 기간:</td>
                <td style="padding: 8px 0; color: #6b7280;">${startDate} ${startTime} ~ ${endDate} ${endTime}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">딜리버리:</td>
                <td style="padding: 8px 0; color: #6b7280;">${useDelivery ? '예' : '아니오'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">추가 운전자:</td>
                <td style="padding: 8px 0; color: #6b7280;">${additionalDriver ? '예' : '아니오'}</td>
              </tr>
              ${additionalDriver ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">추가 운전자:</td>
                <td style="padding: 8px 0; color: #6b7280;">${additionalName} (${additionalPhone})</td>
              </tr>
              ` : ''}
              ${coupon ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">쿠폰:</td>
                <td style="padding: 8px 0; color: #dc2626; font-weight: bold;">${coupon.value}${coupon.type === 'discount_amount' ? '원' : '%'} 할인 적용</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <div style="background-color: #dcfce7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #166534; margin: 0; font-weight: bold;">
              ⚡ 빠른 확인을 위해 고객님께 전화 드리시기 바랍니다.
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              차렌터카 - 자동발송 메일
            </p>
            <p style="color: #6b7280; font-size: 12px; margin: 5px 0 0 0;">
              문의: 032-427-5500
            </p>
          </div>
        </div>
      `,
    };

    // 이메일 전송
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "예약이 성공적으로 접수되었습니다.",
    });
  } catch (error) {
    console.error("예약 이메일 전송 오류:", error);
    return NextResponse.json(
      { error: "예약 접수에 실패했습니다." },
      { status: 500 }
    );
  }
}
