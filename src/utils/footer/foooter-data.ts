import {
  BsDiscord,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
export default [
  {
    id: 1,
    title: "Shop",
    links: [
      {
        name: "Games",
        url: "#games",
      },
      {
        name: "Hardware",
        url: "#hardware",
      },
      {
        name: "Merchandise",
        url: "#merchandise",
      },
      {
        name: "Exclusives",
        url: "#excusives",
      },
      {
        name: "Online service",
        url: "#onlineservice",
      },
    ],
  },
  {
    id: 2,
    title: "Information",
    links: [
      {
        name: "Download area",
        url: "#download",
      },
      {
        name: "Imprint",
        url: "#imprint",
      },
      {
        name: "Data protection",
        url: "#dataprotection",
      },
      {
        name: "Newsletter",
        url: "#newsletter",
      },
      {
        name: "Shipment",
        url: "#shipment",
      },
    ],
  },
  {
    id: 3,
    title: "Our Company",
    links: [
      {
        name: "About Us",
        url: "#aboutus",
      },
      {
        name: "Contact",
        url: "#contact",
      },
      {
        name: "Privacy Policy",
        url: "#privacypolicy",
      },
      {
        name: "Terms of Use",
        url: "#termsofuse",
      },
    ],
    sociallinks: [
      {
        name: "twitter",
        icon: BsTwitter,
        url: "#twitter",
      },
      {
        name: "facebook",
        icon: BsFacebook,
        url: "#facebook",
      },
      {
        name: "instagram",
        icon: BsInstagram,
        url: "#instagram",
      },
      {
        name: "youtube",
        icon: BsYoutube,
        url: "#youtube",
      },
      {
        name: "discord",
        icon: BsDiscord,
        url: "#discord",
      },
    ],
  },
];
