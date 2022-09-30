import MenuItem from "../../components/shared/navbar/menuItem/menuItem";


export default {
    title:'Nav/menuItem',
    component:MenuItem
}

const Template = (arg) => <MenuItem {...arg} />


export const activate = Template.bind({})

activate.arg = {
    type:'navbar',
    children:'home',
    number:'00',
    location:'/'
}