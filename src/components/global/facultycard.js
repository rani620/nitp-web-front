import React from "react"
import newspic from "../home/img/image 2.png"
import "./css/facultycard.scss"
import { Link } from "gatsby"
class Facultycard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let faculty = []
    if (this.props.research != null) {
      faculty = this.props.research.split(",")
    }

    return (
      <>
        <div className="facultycard">
          <div className="faculty1">
            {this.props.extn != 0 ? (
              <p className="extn">Extn:{this.props.extn}</p>
            ) : null}
            <div className="row fimg">
              <div className="facimg">
                <img src={this.props.image!=undefined?`${this.props.image}`:"/faculty.png"} alt="" />
              </div>
              <h2>{this.props.name}</h2>
              <h3>{this.props.desg}</h3>
              <p>{this.props.email}</p>
            </div>
          </div>
          <div className="faculty2">
            { faculty&&faculty.length!=0?<> <p>Research Interests:-</p>
            {faculty.map(item => {
              console.log(item)
              return <p>{item}</p>
            })}</>:null }
            <p>
              <Link
                to={`/profile?id=${this.props.email}`}
              >
                View Full Profile
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }
}
export default Facultycard
