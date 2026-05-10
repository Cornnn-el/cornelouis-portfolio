import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Cornelouis — Full-Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '1200px',
                    height: '630px',
                    backgroundColor: '#F5F1EB',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '80px',
                    fontFamily: 'Georgia, serif',
                }}
            >
                {/* Top — tag */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                    }}
                >
                    <div
                        style={{
                            width: '32px',
                            height: '1px',
                            backgroundColor: '#425B84',
                        }}
                    />
                    <span
                        style={{
                            fontSize: '14px',
                            fontFamily: 'sans-serif',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#425B84',
                        }}
                    >
                        Full-stack developer · Cikarang, ID
                    </span>
                </div>

                {/* Middle — headline */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div
                        style={{
                            fontSize: '96px',
                            fontWeight: 700,
                            color: '#1C1E21',
                            lineHeight: 1.05,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Code is my craft.
                    </div>
                    <div
                        style={{
                            fontSize: '96px',
                            fontWeight: 700,
                            lineHeight: 1.05,
                            letterSpacing: '-0.02em',
                            display: 'flex',
                            gap: '24px',
                        }}
                    >
                        <span style={{ color: '#1C1E21' }}>Music is my</span>
                        <span style={{ color: '#425B84', fontStyle: 'italic' }}>soul.</span>
                    </div>
                </div>

                {/* Bottom — name + url */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        borderTop: '1px solid #D6D0C7',
                        paddingTop: '32px',
                    }}
                >
                    <span
                        style={{
                            fontSize: '28px',
                            fontWeight: 700,
                            color: '#1C1E21',
                        }}
                    >
                        Cornelouis
                    </span>
                    <span
                        style={{
                            fontSize: '14px',
                            fontFamily: 'sans-serif',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#7A6F65',
                        }}
                    >
                        cornelouis-portfolio.vercel.app
                    </span>
                </div>
            </div>
        ),
        { ...size }
    )
}