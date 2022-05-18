import React from "react";
import Svg, { Path, ClipPath } from "react-native-svg";

export enum IconType {
  CHAT = "chat",
  SEARCH = "search",
  HOME = "home",
  SERVICES = "services",
  MENU = "menu"
}
const IconConfig = {
  [IconType.CHAT]: {
    viewBox: "20 20",
    definition: (
      <>
        <Path fill="black" d="M2 0a2.006 2.006 0 00-2 2v12l3-3h9a2.006 2.006 0 002-2V2a2.006 2.006 0 00-2-2zm14 5v4a4 4 0 01-4 4H6v1a2.006 2.006 0 002 2h9l3 3V7a2.006 2.006 0 00-2-2z" />
      </>
    )
  },
  [IconType.SEARCH]: {
    viewBox: "20 20",
    definition: (
      <>
        <Path
          fill="black"
          d="M8.333 0a8.334 8.334 0 100 16.667A8.966 8.966 0 0013 15.332L17.666 20 20 17.666 15.332 13a8.966 8.966 0 001.335-4.668A8.252 8.252 0 008.333 0zm0 3.333a5 5 0 11-5 5 4.911 4.911 0 015-5z"
        />
      </>
    )
  },
  [IconType.HOME]: {
    viewBox: "20 20",
    definition: (
      <>
        <Path fill="black" d="M11 0L0 9.9h3v9h6v-6h4v6h6v-9h3z" />
      </>
    )
  },
  [IconType.SERVICES]: {
    viewBox: "20 20",
    definition: (
      <>
        <Path
          fill="black"
          d="M14.196 0a.254.254 0 00-.252.225l-.112 1.011a3.969 3.969 0 00-1.3.752l-.937-.4a.251.251 0 00-.318.105l-.945 1.618a.253.253 0 00.068.33l.809.6a3.733 3.733 0 000 1.52l-.809.6a.254.254 0 00-.068.33l.938 1.621a.251.251 0 00.318.107l.938-.406a3.969 3.969 0 001.3.752l.117 1.012a.254.254 0 00.252.225h1.871a.254.254 0 00.252-.225l.117-1.012a3.97 3.97 0 001.3-.752l.936.4a.251.251 0 00.318-.105l.943-1.62a.253.253 0 00-.068-.33l-.807-.6a3.77 3.77 0 000-1.518l.809-.6a.254.254 0 00.068-.33l-.937-1.621a.251.251 0 00-.318-.107l-.937.406a3.969 3.969 0 00-1.3-.752L16.325.224A.254.254 0 0016.068 0zm.936 3.25A1.75 1.75 0 1113.382 5a1.751 1.751 0 011.75-1.75zM5.196 7a.254.254 0 00-.252.225L4.77 8.711a4.982 4.982 0 00-2.121 1.211L1.29 9.336a.251.251 0 00-.318.105l-.94 1.622a.253.253 0 00.068.33l1.2.887a4.52 4.52 0 000 2.441l-1.2.889a.254.254 0 00-.068.33l.938 1.621a.251.251 0 00.318.105l1.359-.588a4.982 4.982 0 002.121 1.211l.174 1.486a.254.254 0 00.254.225h1.872a.254.254 0 00.252-.225l.174-1.486a4.982 4.982 0 002.121-1.211l1.359.586a.251.251 0 00.318-.105l.938-1.621a.253.253 0 00-.068-.33l-1.2-.887a4.52 4.52 0 000-2.441l1.2-.889a.254.254 0 00.068-.33l-.937-1.621a.251.251 0 00-.318-.105l-1.359.588a4.982 4.982 0 00-2.121-1.211L7.32 7.225A.254.254 0 007.068 7zm.936 4.5a2 2 0 11-2 2 2 2 0 012-2z"
        />
      </>
    )
  },
  [IconType.MENU]: {
    viewBox: "20 20",
    definition: (
      <>
        <Path fill="black" d="M0 0v3h20V0zm0 6v3h20V6zm0 6v3h20v-3z" />
      </>
    )
  }
  //   [IconType.LOGO]: {
  //     viewBox: "114 114",
  //     definition: (
  //       <>
  //         <g clipPath="url(#clip0_602_1456)">
  //           <Path
  //             fill="#32305D"
  //             d="M101.003 83.392l-14.97-60.02A10.307 10.307 0 0073.54 15.86l-30.007 7.512a10.206 10.206 0 00-4.6 2.529 10.31 10.31 0 00-2.845 4.703 10.486 10.486 0 00-.371 2.5c-.025.926.076 1.85.3 2.749l19.244 77.1a1.372 1.372 0 001.855.938c.244-.1.454-.268.605-.484l7.285-10.4 28.5-7.107a10.308 10.308 0 007.491-12.515l.007.007zM85.319 81.55c0 6.742-3.63 10.014-11.086 10.014H62.749a15.45 15.45 0 01-5.993-1.024 1.168 1.168 0 01-.687-.784l-4.317-16.952h11.235l2.433 9.56a1.12 1.12 0 001.086.852h4.007c.95.104 1.904-.14 2.687-.687a3.52 3.52 0 00.8-2.674V65.488a3.494 3.494 0 00-.8-2.667 3.838 3.838 0 00-2.687-.722h-8.616c-7.024 0-10.44-3.313-10.44-10.124V35.482c0-6.735 3.588-10.014 11-10.014h11.68a15.334 15.334 0 015.794.969 1.113 1.113 0 01.687.756l3.808 15.423H73.168l-1.835-7.4a1.869 1.869 0 00-1.808-1.412h-3.23a4.287 4.287 0 00-2.8.687 3.5 3.5 0 00-.8 2.667v13.54a3.496 3.496 0 00.8 2.667c.82.56 1.814.803 2.8.687h8.364c7.175 0 10.66 3.244 10.66 9.911V81.55z"
  //           ></Path>
  //           <Path fill="#FFBA00" d="M12.686 38.814l16-3.992 1.331 5.335-16 3.992-1.331-5.335z"></Path>
  //           <Path fill="#FF9400" d="M18.578 13.653l14.139 8.495-2.833 4.715-14.138-8.495 2.832-4.715z"></Path>
  //           <Path fill="#FF7100" d="M40.554-.004l3.992 16-5.335 1.331-3.992-16 5.335-1.331z"></Path>
  //         </g>
  //         <defs>
  //           <clipPath id="clip0_602_1456">
  //             <Path fill="#fff" d="M0 0H114V114H0z"></Path>
  //           </clipPath>
  //         </defs>
  //       </>
  //     )
  //   }
};

export default function Icon({ type }: { type: IconType }) {
  const config = IconConfig[type];

  return <Svg viewBox={"0 0 " + config.viewBox}>{config.definition}</Svg>;
}
