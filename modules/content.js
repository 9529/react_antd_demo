import React from 'react'

export default class Content extends React.Component {
  render() {
    const { location } = this.props
    return (
      <div>
        <h2>This is {this.props.match.params.level}!</h2>
        {location.search !== "" ? <p><strong>Query String:</strong> {JSON.stringify(location.search, null, 2)}</p>:null}
      </div>
    )
  }
}