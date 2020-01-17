import React,{Component} from "react"
import axios from 'axios'
import MUIDataTable from 'mui-datatables'


class Detail extends Component {
    constructor(){
        super()
        this.state={
          data: []
        }
    }
    
    
    componentDidMount(){
        axios.get(`https://surveyglance.herokuapp.com/api/tache/facade/user/admin/getRespondents`)
        .then(result => {
            console.log(result)
            this.setState(
                {data: result.data});
                console.log(this.state.data);
                            
        })
    }
 
render(){
    const columns=["Full Name","Gender","Username"]
    const data=[]
 this.state.data.map(res=>{
     const object =[]
     object.push(res.fullName,res.gender,res.username)
          data.push(object)      
            })
           
            const options = {
                filterType: 'checkbox',
              };
    return(
        <div>
            <MUIDataTable 
            title={"Details of Employee"}
            columns={columns}
            data={data}
             options={options}
            />
            </div>
    )}}
export default Detail