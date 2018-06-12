
# Navbar Component

Navbar component for React

Install and save component as a dependency

```
npm install --save library-navbar-component

```

Import component into your app

```

import Navbar from 'library-navbar-component'

```

Create an array of objects with the keys being name, route and items

```

const navBarData = [
	{
		name: "Navbar",
		route: "/",
		items: [
			{
				name: "Item 1",
				route: "/",
				items: [
					{
						name: "Sub item 1",
						route: "/"
					}
				]
			},
			{
				name: "Item 2",
				route: "/"
			},
			{
				name: "Item 3",
				route: "/",
				items: [
					{
						name: "Sub item 3",
						route: "/"
					}
				]
			},
		]
	},
]

```


Create and assign navbar content state with a false value

```

constructor(props) {
	super(props)

	this.state = {
		navBarContent: false
	}
}

```

Create the function that will show navbar options

```

showNavBarOptions (event) {
	var elems = document.querySelectorAll(".nav-item > .dropdown-menu");

	[].forEach.call(elems, function(el) {
	    el.classList.remove("show")
	})

	let hasOptions = event.target.nextSibling.childNodes.length

	if (hasOptions > 0) {
		event.target.nextSibling.classList.toggle("show")
	}
}

```

Create the function that will hide navbar options

```

hideNavBarOptions (event) {
	var elems = document.querySelectorAll(".nav-item > .dropdown-menu");

	[].forEach.call(elems, function(el) {
	    el.classList.remove("show")
	})
}

```

Create the function that will show navbar content

```

showNavBarContent (event) {
	event.preventDefault()

	this.setState({
    navBarContent: !this.state.navBarContent
  })
}

```

Create the function that will hide navbar content

```

hideNavBarContent (event) {
	event.preventDefault()

	this.setState({
    navBarContent: !this.state.navBarContent
  })
}

```


Render the component with the functions we created as well as any other props that are needed

```

render () {
	const navBarData = [
		{
			name: "Navbar",
			route: "/",
			items: [
				{
					name: "Item 1",
					route: "/",
					items: [
						{
							name: "Sub item 1",
							route: "/"
						}
					]
				},
				{
					name: "Item 2",
					route: "/"
				},
				{
					name: "Item 3",
					route: "/",
					items: [
						{
							name: "Sub item 3",
							route: "/"
						}
					]
				},
			]
		},
	]

	return (
		<NavbarComponent
			navBarData={navBarData}
			navBarTheme="light"
			navBarContent={this.state.navBarContent}
			showNavBarContent={this.showNavBarContent.bind(this)}
			hideNavBarContent={this.hideNavBarContent.bind(this)}
			showNavBarOptions={this.showNavBarOptions.bind(this)}
			hideNavBarOptions={this.hideNavBarOptions.bind(this)}  />
	)
}

```

| Prop              | Values                     |
| :---------------- | :------------------------- |
| navBarData        | Object                     |
| navBarBrand       | Image                      |
| navBarTheme       | light or dark              |
| navBarContent     | navBarContent state        |
| showNavBarContent | showNavBarContent function |
| hideNavBarContent | hideNavBarContent function |
| showNavBarOptions | showNavBarOptions function |
| hideNavBarOptions | hideNavBarOptions function |

* Font Awesome needs to included in project