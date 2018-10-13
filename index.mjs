import silo from './output.mjs'
const
{config,input,logic,output,util}=silo,
{truth,v}=util
//@todo find & replace "custom" & "element" with proper values
export default async function custom(url='/node_modules/custom-element/')
{
	await silo(url,'custom-element',custom.element)
}
Object.assign(custom,silo)
custom.element=class extends silo.viewer
{
	constructor(state={})
	{
		super(state)
		let renderer=x=>x
		this.state=truth(logic(state),(...args)=>renderer(args)).state
		renderer=v.render(this.shadowRoot,this,output)
	}
}