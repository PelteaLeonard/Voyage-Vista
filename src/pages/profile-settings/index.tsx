import { Url } from "../../constants/url-constants";
import { getSplitElement } from "../../utils/string-utils";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  Item,
  Main,
  Menu,
  Link,
  ContentContainer,
  BannerContainer,
  MaskContainer,
  ContentWrapper,
} from "./styles";

const sections = [
  {
    text: "General",
    url: Url.ChangeGeneral,
  },
  {
    text: "Email",
    url: Url.ChangeEmail,
  },
  {
    text: "Password",
    url: Url.ChangePassword,
  },
];

function ProfileSettings() {
  const location = useLocation();

  const [currentSection, setCurrentSection] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    setCurrentSection(location.pathname.split("/").pop());
  }, [location]);

  return (
    <Main>
      <BannerContainer>
        <MaskContainer />
      </BannerContainer>
      <ContentWrapper>
        <ContentContainer>
          <Menu>
            {sections.map(({ url, text }, index) => (
              <Item key={index}>
                <Link
                  to={url}
                  active={
                    currentSection !== undefined &&
                    currentSection === getSplitElement(url, "/", -1)
                  }
                >
                  {text}
                </Link>
              </Item>
            ))}
          </Menu>
          <Outlet />
        </ContentContainer>
      </ContentWrapper>
    </Main>
  );
}
export default ProfileSettings;
