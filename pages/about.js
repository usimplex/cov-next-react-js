import BaseLayout from "../components/BaseLayout";

const aboutContent = <p>About covid infection and stuff</p>;

export default function About(props) {
    return (
        <BaseLayout content={aboutContent} />
    );
}