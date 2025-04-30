export default async function GoogleOAuth(code: string){

    //exchange auth code for access and refresh token
    const data =
        await fetch('https://oauth2.googleapis.com/token',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    code,
                    client_id: process.env.GOOGLE_CLIENT_ID!,
                    client_secret: process.env.GOOGLE_CLIENT_SECRET!,
                    redirect_uri: "https://mp-6-iota.vercel.app/callback",
                    grant_type: 'authorization_code',
                }),
            });

    if(!data.ok){
        //throw error
        const errorBody = await data.text();
        console.error("Token exchange failed:", data.status, errorBody);
        throw new Error(`Failed to authenticate: ${data.status}`);
    }

    return data.json();
}
