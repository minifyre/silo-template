import silo from './output.mjs'
const
{config,input,logic,output,util}=silo,
{truth,v}=util
export default async function custom(url='/node_modules/custom-element/')
{
	await silo(url,'custom-element',custom.viewer)
}
Object.assign(pixel,silo)
custom.viewer=class extends silo.viewer
{
	constructor(state={})
	{
		super(state)
		let renderer=x=>x
		this.state=truth(logic(state),(...args)=>renderer(args))
		renderer=v.render(this.shadowRoot,this,output)
	}
}