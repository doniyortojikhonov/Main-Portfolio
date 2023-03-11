import React from "react";
import {
    AboutContent,
    AboutDetailsContainer,
    AboutImage,
    AboutImageContainer,
    Resume,
    ResumeLink,
    StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my-image.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/cv.pdf";

const About = () => {
    return (
        <StyledAbout id="about">
            <SectionHeading dark="true" mb="3rem">
                <SectionTitle dark="true" number="02">
                    About Me
                </SectionTitle>
            </SectionHeading>
            <AboutContent>
                <AboutImageContainer>
                    <AboutImage src={myImage} />
                </AboutImageContainer>
                <AboutDetailsContainer>
                    <StyledParagraph>
                        "Thanks for visiting my portfolio website! My name is
                        Doniyor Tojikhonov and I am a frontend developer
                        specializing in creating visually stunning and
                        user-friendly websites. I have developed a keen eye for
                        design and a strong understanding of what it takes to
                        create a website that not only looks great but also
                        functions seamlessly.
                    </StyledParagraph>
                    <StyledParagraph>
                        My skills include HTML, CSS, JavaScript, and a range of
                        frontend frameworks and libraries such as ReactJS,
                        Bootstrap and Tailwind. I am constantly exploring new
                        technologies and techniques to improve my craft and
                        deliver high-quality websites that meet client needs.
                    </StyledParagraph>
                    <StyledParagraph>
                        If you have a project in mind or would like to learn
                        more about my skills and experience, feel free to
                        contact me. I am always looking for new opportunities to
                        collaborate with clients and help bring their vision to
                        life."
                    </StyledParagraph>
                    <Resume>
                        <ResumeLink
                            href={resume}
                            icon={downloadIcon}
                            download="cv-doniyor-tojikhonov"
                        >
                            Download Resume
                        </ResumeLink>
                    </Resume>
                </AboutDetailsContainer>
            </AboutContent>
        </StyledAbout>
    );
};

export default About;
