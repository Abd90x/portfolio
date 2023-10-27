import React from "react";
import ChatBot from "react-simple-chatbot";
import Logo from "../assets/imgs/Lo.png";
import { ThemeProvider } from "styled-components";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
function Chatbot() {
  const steps = [
    {
      id: "1",
      message: "I'm Sleeping right now 😴💤",
      trigger: "2",
    },
    {
      id: "2",
      options: [{ value: 1, label: "Knock, knock.", trigger: "3" }],
    },
    {
      id: "3",
      message: "Who's there?",
      trigger: "4",
    },
    {
      id: "4",
      options: [{ value: 1, label: "Boo.", trigger: "5" }],
    },
    {
      id: "5",
      message: "Boo who?",
      trigger: "6",
    },
    {
      id: "6",
      options: [
        {
          value: 1,
          label: "Don't cry, i'm just trying to be funny!",
          trigger: "7",
        },
      ],
    },
    {
      id: "7",
      message:
        "😄 Well, you got me there! I guess I'll leave the jokes to the professionals.",
      trigger: "8",
    },
    {
      id: "8",
      options: [{ value: 1, label: "Come on, tell me a joke!", trigger: "9" }],
    },
    {
      id: "9",
      message: "Why did the computer keep freezing?",
      trigger: "10",
    },
    {
      id: "10",
      options: [{ value: 1, label: "I don't know, why?", trigger: "11" }],
    },
    {
      id: "11",
      message: "Because it left its Windows open!",
      trigger: "12",
    },
    {
      id: "12",
      options: [
        {
          value: 1,
          label: "Haha, that's a good one! Got any more?",
          trigger: "13",
        },
      ],
    },
    {
      id: "13",
      message: "Sure, here's another: What did one wall say to the other wall?",
      trigger: "14",
    },
    {
      id: "14",
      options: [{ value: 1, label: "I don't know, what?", trigger: "15" }],
    },
    {
      id: "15",
      message: "I'll meet you at the corner!",
      trigger: "16",
    },
    {
      id: "16",
      options: [{ value: 1, label: "Haha, that's a good one!", trigger: "17" }],
    },
    {
      id: "17",
      message: "Wait Wait I'm Open to Work Can You Hire Me?",
      trigger: "18",
    },
    {
      id: "18",
      options: [
        { value: 1, label: "Yes 😍", trigger: "19" },
        { value: 2, label: "No I Don't Need 😭", trigger: "20" },
      ],
    },
    {
      id: "19",
      component: (
        <div>
          That's great. You can contact me on: <br />
          <a
            style={{
              color: "#FFF",
              fontSize: "16px",
              backgroundColor: "#2b2d42",
              padding: "2px",
              borderRadius: "5px",
              display: "block",
              textAlign: "center",
            }}
            href="https://www.linkedin.com/in/abd90x/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin <FaLinkedin />
          </a>
          <br />
          <a
            style={{
              color: "#FFF",
              fontSize: "16px",
              backgroundColor: "#2b2d42",
              padding: "2px",
              borderRadius: "5px",
              display: "block",
              marginTop: "-15px",
              textAlign: "center",
            }}
            href="mailto:abd90v@gmail.com"
          >
            Email <MdEmail />
          </a>
        </div>
      ),
      asMessage: true,
      end: true,
    },
    {
      id: "20",
      component: (
        <div>
          Fine 🥲 thank you, you are always welcome to hear some jokes. Also, you
          can download my CV if you need a Frontend Developer in the future.
          <hr />
          <br />
          <a
            style={{
              color: "#fff",
              backgroundColor: "#2b2d42",
              padding: "2px 4px",
              borderRadius: "5px",
              margin: "2px",
            }}
            href="https://drive.google.com/u/0/uc?id=1SvmPZPgzmyEmhJd_JcxHH1-ObeQL_tKK&export=download"
          >
            Here is My CV
          </a>
        </div>
      ),
      asMessage: true,
      end: true,
    },
  ];

  const theme = {
    background: "#edf2f4",
    headerBgColor: "#2b2d42",
    headerFontSize: "20px",
    botBubbleColor: "#e83d3d",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "#8d99ae",
    userFontColor: "white",
  };
  const config = {
    botAvatar: Logo,
    floating: true,
  };
  return (
    <div className="chatbot">
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} {...config} headerTitle="My Awesome Bot" />
      </ThemeProvider>
    </div>
  );
}

export default Chatbot;
