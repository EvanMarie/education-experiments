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
        <NavLinkButton to="/wikipedia" buttonText="wikimedia" />
        <NavLinkButton to="/open-stax" buttonText="open stax" />
      </Transition>
    </LayoutContainer>
  );
}

// There are many APIs that can be used for educational purposes, covering a wide range of topics such as science, math, history, literature, and more. Here are some popular APIs that can be useful for educational applications:

// ### 1. **Wolfram Alpha API**
// - **Description**: Provides computational knowledge and answers to questions across various domains like mathematics, science, technology, history, and more.
// - **Use Case**: Solving math problems, retrieving scientific data, generating plots, and providing detailed explanations.
// - **Website**: [Wolfram Alpha API](https://products.wolframalpha.com/api/)

// ### 2. **NASA APIs**
// - **Description**: Offers access to a vast amount of data related to space, astronomy, and planetary science.
// - **Use Case**: Fetching images from Mars rovers, accessing satellite imagery, retrieving information about celestial events, and more.
// - **Website**: [NASA APIs](https://api.nasa.gov/)

// ### 3. **OpenAI GPT-4 API**
// - **Description**: Provides access to OpenAI's powerful language models for generating human-like text.
// - **Use Case**: Language learning, essay writing assistance, generating educational content, and creating interactive learning tools.
// - **Website**: [OpenAI GPT-4 API](https://openai.com/product/gpt-4)

// ### 4. **Google Books API**
// - **Description**: Allows access to the Google Books database, providing information about millions of books.
// - **Use Case**: Searching for books, retrieving book details, and accessing previews of book content.
// - **Website**: [Google Books API](https://developers.google.com/books)

// ### 5. **Khan Academy API**
// - **Description**: Provides access to educational content and resources from Khan Academy.
// - **Use Case**: Fetching educational videos, exercises, and articles across various subjects.
// - **Website**: [Khan Academy API](https://api-explorer.khanacademy.org/)

// ### 6. **Library of Congress API**
// - **Description**: Provides access to a vast collection of digital resources, including books, photographs, maps, and audio recordings.
// - **Use Case**: Accessing historical documents, researching historical events, and retrieving multimedia content.
// - **Website**: [Library of Congress API](https://libraryofcongress.github.io/data-exploration/)

// ### 7. **TED Talks API**
// - **Description**: Allows access to the TED Talks database, including information about talks, speakers, and topics.
// - **Use Case**: Integrating TED Talks into educational platforms, searching for talks by topic or speaker, and retrieving video URLs.
// - **Website**: [TED Talks API](https://developer.ted.com/)

// ### 8. **OpenStax API**
// - **Description**: Provides access to free, peer-reviewed, openly licensed textbooks and educational resources.
// - **Use Case**: Integrating OpenStax textbooks into learning management systems, accessing educational content, and providing open educational resources.
// - **Website**: [OpenStax API](https://openstax.org/api)

// ### 9. **Smithsonian Institution API**
// - **Description**: Offers access to the Smithsonian's vast collection of artifacts, images, and research.
// - **Use Case**: Accessing museum collections, retrieving information about historical artifacts, and integrating educational content into applications.
// - **Website**: [Smithsonian Institution API](https://www.si.edu/developer)

// ### 10. **World Bank API**
// - **Description**: Provides access to global development data, including economic indicators, statistics, and other information.
// - **Use Case**: Researching economic data, analyzing development trends, and retrieving statistical information for educational purposes.
// - **Website**: [World Bank API](https://data.worldbank.org/developers)

// These APIs offer a wealth of information and can be integrated into educational platforms, applications, and websites to enhance learning experiences across various subjects.
