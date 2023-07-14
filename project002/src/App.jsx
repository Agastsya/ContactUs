import "./App.css";
import Navigation from "./components/navigation/navigation";
import ContentHeader from "./components/contactHeader/contentHeader";
import ContactForm from "./components/contactForm/contactForm";

const App = () => {
  return (
    <div>
      <Navigation />
      <ContentHeader />
      <ContactForm />
    </div>
  );
};

export default App;
