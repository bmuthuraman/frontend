import {
    Facebook,
    Instagram,
    Twitter,
} from "lucide-react";

const SocialIcons = () => {

    const socialLinks = [
        {
            name: "Facebook",
            icon: Facebook,
            url: "#",
        },
        {
            name: "Instagram",
            icon: Instagram,
            url: "#",
        },
        {
            name: "Twitter",
            icon: Twitter,
            url: "#",
        },
    ];

    return (
        <div className="d-flex align-items-center gap-3">

            {socialLinks.map(({ name, icon: Icon, url }) => (

                <a
                    key={name}
                    href={url}
                    aria-label={name}
                    className="reen-social-icon"
                >
                    <Icon size={20} />
                </a>

            ))}

        </div>
    );
};

export default SocialIcons;