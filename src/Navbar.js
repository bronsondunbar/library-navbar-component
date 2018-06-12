import React, { Fragment } from 'react'
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
          onClick={!hideNavBarContent ? null : (event) => hideNavBarContent(event)}>
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
                        <a
                          className="nav-link"
                          href={data.route} >
                            {data.name}
                        </a>
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
                onClick={!showNavBarContent ? null : (event) => showNavBarContent(event)}>
                <i className="fas fa-bars"></i>
              </a>
              <a key={index} className="navbar-brand" href={data.route}>
                {navBarBrand &&
                  <img src={navBarBrand} width="30" height="30" className="d-inline-block align-top" />
                }
                {data.name}
              </a>
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
                                onMouseEnter={!showNavBarOptions ? null : (event) => showNavBarOptions(event)} >
                                  {data.name}
                              </a>
                            : <a
                                className="nav-link"
                                href={data.route}
                                onMouseEnter={!showNavBarOptions ? null : (event) => showNavBarOptions(event)} >
                                  {data.name}
                              </a>}
                          <div
                            className="dropdown-menu"
                            onMouseLeave={!hideNavBarOptions ? null : (event) => hideNavBarOptions(event)}>
                            {data.items != undefined
                              ? data.items.map((data, index) => {
                                  return (
                                    <a className="dropdown-item" href="#">{data.name}</a>
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