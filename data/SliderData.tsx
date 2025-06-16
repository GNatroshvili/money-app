export type ImageSliderType = {
    balance: string;
    title: string;
    expire: string;
    number: string;
    image: any;
    icon?: any;
    backgroundColor?: string; // <- add this
    color?: string
};


export const ImageSlider = [
    {
        balance: "$4500.00",
        title: "Company",
        expire: "01/2027",
        number: "**** **** **** 1695",
        image: require('../assets/images/masterCard.png'),
        icon: require('../assets/images/masterCardLogo.png'),
        backgroundColor: '#40D3F2',
        color: "#fff",
    },
    {
        balance: "$4500.00",
        title: "Company",
        expire: "01/2027",
        number: "**** **** **** 1695",
        image: require('../assets/images/masterCard.png'),
        icon: require('../assets/images/masterCardLogo.png'),
        backgroundColor: '#FFFFFF',
        color: "#000000",
    },
    {
        balance: "$4500.00",
        title: "Company",
        expire: "01/2027",
        number: "**** **** **** 1695",
        image: require('../assets/images/masterCard.png'),
        icon: require('../assets/images/masterCardLogo.png'),
        backgroundColor: '#FF0000',
        color: "#fff",
    },
];
