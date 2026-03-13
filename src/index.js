import "./index.css";
import { ItWorks } from "./components/ItWorks.jsx";
import register from 'preact-custom-element';
import ChatView from "./components/ChatView.jsx";

register(ItWorks, "x-it-works");
register(ChatView, "x-chat");
