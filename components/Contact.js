var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			<div className={'contactItem'}>
<<<<<<< HEAD
				<img className={'contactImage'} src={'https://avatarfiles.alphacoders.com/495/49573.jpg'} />
=======
				<img className={'contactItem'} src={'https://avatarfiles.alphacoders.com/495/49573.jpg'} />
>>>>>>> origin/master
				<p className={'contactLabel'}>
					Imię: {this.props.item.firstName}
				</p>
				<p className={'contactLabel'}>
					Nazwisko: {this.props.item.lastName}
				</p>
				<a href={'mailto:' + this.props.item.email}>
					{this.props.item.email}
				</a>
			</div>
		);
	},
});