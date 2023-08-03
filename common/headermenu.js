export default {
    menus: {
        last: {
            name: "En Son Fırlatma",
            slug: "/son-firlatma",
            endpoint: "latest"
        },
        past: {
            name: "Geçmiş Fırlatmalar",
            slug: "/gecmis-firlatmalar",
            endpoint: "past"
        },
        next: {
            name: "Gelecekteki Fırlatmalar",
            slug: "/gelecekteki-firlatmalar",
            endpoint: "next"
        }
    },
    endpoints: ["latest", "past", "next"]
}