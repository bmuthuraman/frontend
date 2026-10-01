export const isTokenExpired = () => {

    const token =
        localStorage.getItem("accessToken");

    if (!token) {
        return true;
    }

    try {

        const payload = JSON.parse(
            atob(token.split(".")[1])
        );

        const currentTime =
            Math.floor(Date.now() / 1000);

        return payload.exp <= currentTime;

    } catch {

        return true;
    }
};