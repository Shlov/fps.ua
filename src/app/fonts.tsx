import localFont from "next/font/local";

export const avenir = localFont({
  src: [
    {
      path: "../../public/fonts/avenir-lt-std-95-black.woff2",
      weight: "750",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir-lt-std-55-roman.woff2",
      weight: "350",
      style: "normal",
    },
  ],
});

export const pridi = localFont({
  src: [
    {
      path: "../../public/fonts/Pridi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pridi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pridi-Medium.woff2",
      weight: "300",
      style: "normal",
    },
  ],
});

export const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-ExtraBold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});
