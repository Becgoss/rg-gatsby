import React from 'react'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
    displayName: 'HTML',
    propTypes: {
        body: React.PropTypes.string,
    },
    render() {
        const {body, route} = this.props
        const {title} = Helmet.rewind()
        let css
        if (process.env.NODE_ENV === 'production') {
            css = <style dangerouslySetInnerHTML={ {    __html: require('!raw!./public/styles.css')} } />
        }

        return (
            <html lang="en">
            <head>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0" />
              { title.toComponent() }
              { css }
            </head>
            <body className="avenir black">
              <div id="react-mount" dangerouslySetInnerHTML={ {    __html: this.props.body} } />
              <script src={ prefixLink(`/bundle.js?t=${BUILD_TIME}`) } />
            </body>
            </html>
        )
    },
})
