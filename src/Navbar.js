import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import './style.css'

const NavbarComponent = ({ navBarData, navBarBrand, navBarTheme, navBarContent, showNavBarContent, hideNavBarContent, showNavBarOptions, hideNavBarOptions }) => {

  let navBarClass = classNames({
    navbar: true,
    'navbar-expand-lg': true,
    'navbar-light bg-light': navBarTheme == 'light' || navBarTheme == null,
    'navbar-dark bg-dark': navBarTheme == 'dark'
  })

  let navBarContentClass = classNames({
    'navbar-content': true,
    'navbar-content-light': navBarTheme == 'light' || navBarTheme == null,
    'navbar-content-dark': navBarTheme == 'dark',
    'navbar-content-visible': navBarContent == true
  })

  return (
    <Fragment>
      <div className={navBarContentClass}>
        <a
          href="#"
          className="navbar-content-close"
          onClick={(event) => hideNavBarContent(event)}>
          <i className="fas fa-times"></i>
        </a>

        {navBarData.map((data, index) => {
          return (
            <Fragment>
              {navBarBrand &&
                <img src={navBarBrand} />
              }
            </Fragment>
          )
        })}

        {navBarData.map((data, index) => {
          return (
            data.items != undefined
              ? data.items.map((data, index) => {
                  return (
                    <li key={index} className="nav-item">
                        <Link
                          className="nav-link"
                          to={data.route} >
                            {data.name}
                        </Link>
                    </li>
                  )
                })
            : null)
        })}
      </div>

      <nav className={navBarClass}>
        {navBarData.map((data, index) => {
          return (
            <Fragment>
              <a
                href="#"
                className="navbar-toggle hidden-sm"
                onClick={(event) => showNavBarContent(event)}>
                <i className="fas fa-bars"></i>
              </a>
              <Link key={index} className="navbar-brand" to={data.route}>
                {navBarBrand &&
                  <img src={navBarBrand} width="30" height="30" className="d-inline-block align-top" />
                }
                {data.name}
              </Link>
            </Fragment>
          )
        })}
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            {navBarData.map((data, index) => {
              return (
                data.items != undefined
                  ? data.items.map((data, index) => {
                      return (
                        <li key={index} className="nav-item">
                          {data.items != undefined
                            ? <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                onMouseEnter={(event) => showNavBarOptions(event)} >
                                  {data.name}
                              </a>
                            : <Link
                                className="nav-link"
                                to={data.route}
                                onMouseEnter={(event) => showNavBarOptions(event)} >
                                  {data.name}
                              </Link>}
                          <div
                            className="dropdown-menu"
                            onMouseLeave={(event) => hideNavBarOptions(event)}>
                            {data.items != undefined
                              ? data.items.map((data, index) => {
                                  return (
                                    <Link className="dropdown-item" to="#">{data.name}</Link>
                                  )
                                })
                              : null}
                          </div>
                        </li>
                      )
                    })
                : null)
            })}
          </ul>
        </div>
      </nav>
    </Fragment>
  )
}

export default NavbarComponent