export interface MenuItem {
  display: string;
  href: string;
  children?: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  { display: "Home", href: "/" },
  { display: "About Us", href: "/about" },
  { display: "Services", href: "/services" },
  { display: "Projects", href: "/projects" },
  {
    display: "Pages",
    href: "/#pricing",
    children: [
      { display: "Pricing Plans", href: "/#pricing" },
      { display: "Insights & News", href: "/#insights" },
      { display: "Privacy Policy", href: "/privacy-policy" },
      { display: "Terms & Conditions", href: "/terms-conditions" },
    ],
  },
  { display: "Contact", href: "/contact" },
];

// TODO: replace with the company's real phone number/hours
export const CONTACT_PHONE = "+1 (901) 123-4567";
export const OPEN_HOURS = "Mon - Sat, 9am - 6pm";
