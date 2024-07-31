import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import { FaSquareGithub } from "react-icons/fa6";
import Button from "~/components/buildingBlocks/button";
import HStack from "~/components/buildingBlocks/hStack";
import Icon from "~/components/buildingBlocks/icon";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import NavLinkButton from "~/components/buildingBlocks/navLinkButton";
import Text from "~/components/buildingBlocks/text";
import Transition from "~/components/buildingBlocks/transition";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Wrap from "~/components/buildingBlocks/wrap";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <LayoutContainer>
      <Transition className="w-full h-full justify-center items-center">
        <NavLinkButton to="/wikipedia" buttonText="wikipedia" />
        <NavLinkButton to="/smithsonian" buttonText="smithsonian" />
      </Transition>
    </LayoutContainer>
  );
}

// Many of the APIs listed offer free access or educational accounts, though the exact terms and limits may vary. Here is a breakdown of the APIs with information about their free access or educational-level accounts:

// ### 1. **Wolfram Alpha API**
// - **Free Access**: Wolfram Alpha offers a limited free tier for API access.
// - **Educational Accounts**: There are educational plans available that might provide more extensive access.
// - **Website**: [Wolfram Alpha API](https://products.wolframalpha.com/api/)

// ### 2. **NASA APIs**
// - **Free Access**: NASA APIs are free to use and do not require an API key.
// - **Educational Accounts**: Free access makes it suitable for educational purposes.
// - **Website**: [NASA APIs](https://api.nasa.gov/)

// ### 3. **OpenAI GPT-4 API**
// - **Free Access**: OpenAI offers a limited free tier, but it requires an API key and has usage limits.
// - **Educational Accounts**: OpenAI provides grants and special programs for educational and research institutions.
// - **Website**: [OpenAI GPT-4 API](https://openai.com/product/gpt-4)

// ### 4. **Google Books API**
// - **Free Access**: Google Books API is free to use with an API key.
// - **Educational Accounts**: No specific educational accounts, but free access is sufficient for most educational uses.
// - **Website**: [Google Books API](https://developers.google.com/books)

// ### 5. **Khan Academy API**
// - **Free Access**: Khan Academy API is free to use.
// - **Educational Accounts**: Free access is designed specifically for educational purposes.
// - **Website**: [Khan Academy API](https://api-explorer.khanacademy.org/)

// ### 6. **Library of Congress API**
// - **Free Access**: The Library of Congress API is free to use.
// - **Educational Accounts**: Free access is suitable for educational purposes.
// - **Website**: [Library of Congress API](https://libraryofcongress.github.io/data-exploration/)

// ### 7. **TED Talks API**
// - **Free Access**: TED Talks API is free to use, but requires an API key.
// - **Educational Accounts**: Free access is suitable for educational uses.
// - **Website**: [TED Talks API](https://developer.ted.com/)

// ### 8. **Smithsonian Institution API**
// - **Free Access**: The Smithsonian Institution API is free to use.
// - **Educational Accounts**: Free access makes it suitable for educational purposes.
// - **Website**: [Smithsonian Institution API](https://www.si.edu/developer)

// All of these APIs offer free access tiers that can be utilized for educational purposes. However, usage limits and the need for API keys may vary, so it's important to review each API's documentation for specific details on access and limitations.
