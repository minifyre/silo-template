import silo from './node_modules/pane-viewer/index.mjs'
export default silo
const {config}=silo()

config.state=
{
	file:{},
	view:{type:'custom-element'}
}