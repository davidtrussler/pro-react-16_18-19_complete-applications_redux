import React, {Component} from 'react'; 
import {SupplierTable} from './SupplierTable'; 
import {SupplierEditor} from './SupplierEditor'; 
import {connect} from 'react-redux'; 
// import {saveSupplier, deleteSupplier} from './store'; 
import { EditorConnector } from './store/EditorConnector'; 
import { SUPPLIERS } from './store/dataTypes'; 
import { TableConnector } from './store/TableConnector'; 
import { startCreatingSupplier } from './store/stateActions'; 

const ConnectedEditor = EditorConnector(SUPPLIERS, SupplierEditor); 
const ConnectedTable = TableConnector(SUPPLIERS, SupplierTable); 

const mapStateToProps = (storeData) => ({
	editing: storeData.stateData.editing, 
	selected: storeData.modelData.suppliers.find(item => item.id === storeData.stateData.selectedId) || {}
})

const mapDispatchToProps = {
	createSupplier: startCreatingSupplier
	// saveCallback : saveSupplier, 
	// deleteCallback: deleteSupplier
}

const connectFunction = connect(mapStateToProps, mapDispatchToProps); 

export const SupplierDisplay = connectFunction (
	class extends Component {

	// constructor(props) {
	// 	super(props); 

	// 	this.state = {
	// 		showEditor: false, 
	// 		selected: null
	// 	}
	// }

	// startEditing = (supplier) => {
	// 	this.setState({showEditor: true, selected: supplier}); 
	// }

	// createSupplier = () => {
	// 	this.setState({showEditor: true, selected: {}}); 
	// }

	// cancelEditing = () => {
	// 	this.setState({showEditor: false, selected: null}); 
	// }

	// saveSupplier = (supplier) => {
	// 	this.props.saveCallback(supplier); 
	// 	this.setState({showEditor: false, selected: null}); 
	// }

	render() {
		if (this.props.editing) {
			return <ConnectedEditor key={this.props.selected.id || -1}/>
			// return (
			// 	<SupplierEditor
			// 		key = {this.state.selected.id || -1}
			// 		supplier = {this.state.selected}
			// 		saveCallback = {this.saveSupplier}
			// 		cancelCallback = {this.cancelEditing}
			// 	/>
			// )
		} else {
			return (
				<div className="m-2">
					<ConnectedTable/>
					{/* <SupplierTable
						suppliers = {this.props.suppliers}
						editCallback = {this.startEditing}
						deleteCallback = {this.props.deleteCallback}
					/> */}

					<div className="text-center">
						<button className="btn btn-primary m-1"
							onClick={this.createSupplier}
						>
							Create Supplier
						</button>
					</div>
				</div>
			)
		}
	}
}); 
