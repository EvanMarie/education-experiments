import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import "tailwind.css";
import LayoutContainer from "./components/buildingBlocks/layoutContainer";
import NavContainer from "./components/buildingBlocks/navContainer";
import NavIconButton from "./components/buildingBlocks/navLinkIconButton";
import { BsHouse } from "react-icons/bs";
import FlexFull from "./components/buildingBlocks/flexFull";
import Flex from "./components/buildingBlocks/flex";
import { camelCaseToTitleCase } from "./utils/camelToTitleCase";

// import { AnimatePresence } from "framer-motion";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Waiting+for+the+Sunrise&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Butterfly+Kids&display=swap",
  },
];

export default function App() {
  const pathname = useLocation().pathname;
  const currentAPI = pathname.split("/")[1];
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <LayoutContainer className="bg-radial2op50">
          <NavContainer className="h-4vh">
            <Flex className="px-1.5vh">
              <NavIconButton icon={BsHouse} to="/" type="smallNormal" />
            </Flex>
            <FlexFull className="justify-center">
              {currentAPI && (
                <h5 className="text-col-800 lightTextShadow font-semibold text-3vh">
                  Search {camelCaseToTitleCase(currentAPI)}
                </h5>
              )}
            </FlexFull>
          </NavContainer>
          <FlexFull className="h-[100svh] pt-4vh justify-center text-col-900">
            <Outlet />
          </FlexFull>
          <ScrollRestoration />
          <Scripts />
        </LayoutContainer>
      </body>
    </html>
  );
}
