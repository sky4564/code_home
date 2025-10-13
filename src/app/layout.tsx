import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

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
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}

        {/* 채널톡 스크립트 */}
        <Script
          id="channel-talk"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var w = window;
                if (w.ChannelIO) {
                  return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
                }
                var ch = function() {
                  ch.c(arguments);
                };
                ch.q = [];
                ch.c = function(args) {
                  ch.q.push(args);
                };
                w.ChannelIO = ch;
                function l() {
                  if (w.ChannelIOInitialized) {
                    return;
                  }
                  w.ChannelIOInitialized = true;
                  var s = document.createElement('script');
                  s.type = 'text/javascript';
                  s.async = true;
                  s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
                  s.charset = 'UTF-8';
                  var x = document.getElementsByTagName('script')[0];
                  x.parentNode.insertBefore(s, x);
                }
                if (document.readyState === 'complete') {
                  l();
                } else if (window.attachEvent) {
                  window.attachEvent('onload', l);
                } else {
                  window.addEventListener('DOMContentLoaded', l, false);
                  window.addEventListener('load', l, false);
                }
              })();
              
              // 채널톡 초기화 - 여기에 실제 플러그인 키를 입력하세요
              ChannelIO('boot', {
                "pluginKey": "39320c76-d53e-4c6e-b412-921ceca3bcbb"
              });
            `,
          }}
        />
      </body>
    </html>
  )
}

