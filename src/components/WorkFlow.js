import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  margin: 0 auto 50px;
`;

const Timeline = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 730px) {
    flex-direction: column;
  }

  background-color: transparent;
  color: white;

  gap: 15px;
`;

const TimelineItem = styled.div`
  @media screen and (max-width: 730px) {
    width: 100%;
  }

  @media screen and (min-width: 730px) {
    max-width: 300px;
  }
`;

const TimelineContent = styled.div`
  background-color: #3f51b5;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  height: 100%;
  max-height: 280px;
  text-align: center;
`;

export const WorkFlow = () => {
  return (
    <Wrapper>
      <Timeline>
        <TimelineItem>
          <TimelineContent>
            <h3>0. Our Working Style</h3>
            <p>
              We work on a project-to-project basis and we do not provide
              services unless the work being done is agreed upon by us and our
              clients in writing. We hold this standard for projects we develop
              and any support we provide to existing development teams in an
              organization.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent>
            <h3>1. First Point of Contact</h3>
            <p>
              We'll have you fill out a questionnaire (will take 10-15 minutess)
              in order to understand what your current needs are, and gauge
              whether or not we're a good fit to help you reach your goal.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent>
            <h3>2. Requirements Analysis</h3>
            <p>
              If we're a good match we will meet to discuss the higher level
              technical requirements for your project. Then we outline them down
              to the smallest individual task with hourly estimates to complete
              each task and provide you with a quotation for the cost of
              completing them all, and a projected date of completion.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent>
            <h3>3. Development</h3>
            <p>
              Once an agreement has been reached, we will begin development of
              the project using the development tools and methodologies we
              specialize in. Periodically we will conduct demos of the project
              in development bi-weekly or at your discretion.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent>
            <h3>4. Testing</h3>
            <p>
              At Auxiliary One we take testing very seriously. We use cutting
              edge CI/CD tools like Gitlab and Circle to make sure that all
              layers of applications we develop are tested thoroughly using a
              test-driven-development approach before being sent into production
              environments.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent>
            <h3>5. Deployment</h3>
            <p>
              For Web and Cloud based solutions we typically allow our clients
              to host services we create on their own hosting platforms. We do
              offer services such as Maintenance Contracts, where we host and
              monitor applications on behalf of our clients at a monthly rate.
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Wrapper>
  );
};
