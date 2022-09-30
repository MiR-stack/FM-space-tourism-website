import Menu from "../../components/shared/navbar/menu/menu";

export default {
  title: "Nav/menu",
  component: Menu,
};

const Template = arg => <Menu {...arg} />



export const navbar = Template.bind({})
navbar.arg={
    data:['home','about'],
    
}