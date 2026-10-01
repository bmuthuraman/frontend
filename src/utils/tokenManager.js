const getTokenExpiration = (token) => {
    try {
        const payload = JSON.parse(
            atob(token.split(".")[1])
        );

        return payload.exp;
    } catch {
        return null;
    }
};


export const scheduleTokenExpiration = (
    token,
    onExpired
) => {

    const expiration =
        getTokenExpiration(token);

    if (!expiration) {
        return;
    }

    const expirationTime =
        expiration * 1000;

    const remainingTime =
        expirationTime - Date.now();


    if (remainingTime <= 0) {

        onExpired();

        return;
    }


    setTimeout(() => {

        onExpired();

    }, remainingTime);
};