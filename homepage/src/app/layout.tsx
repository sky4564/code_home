import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '차렌터카 - 여행의 시작과 끝, 차렌터카와 함께하세요',
  description: '인천 최고의 렌터카 서비스! 7인승 카니발, 24시간 운영, 공항픽업, 단기/월렌트/사고대차 전문업체. 유모차·카시트 무료제공, 정찰제 운영으로 믿을 수 있는 차렌터카입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}

