import Heading from "../components/ui/text/heading";


export default {
    title:'Ui/text/heading',
    component:Heading
}


const Template = (args) => <Heading {...args} >this is heading</Heading>

export const heading1 = Template.bind({})

heading1.args = {
    size:'h1'
}

export const heading2 = Template.bind({})

heading2.args = {
    size:'h2'
}
export const heading3 = Template.bind({})

heading3.args = {
    size:'h3'
}
export const heading4 = Template.bind({})

heading4.args = {
    size:'h4'
}

export const heading5 = Template.bind({})

heading5.args = {
    size:'h5'
}