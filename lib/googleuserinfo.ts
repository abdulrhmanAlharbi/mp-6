export default async function GoogleUserInfo(access_token: string){

    const data =
        await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

    if (!data.ok){
        const errorBody = await data.text();
        console.error("Info fetch", data.status, errorBody);
        throw new Error(`Failed to fetch user information: ${data.status}`);
    }

    return data.json();
}