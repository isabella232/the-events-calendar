/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * WordPress dependencies
 */
import {
	PanelBody,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import {
	date,
} from '@moderntribe/common/utils';

/**
 * Module Code
 */

const { timezonesAsSelectData } = date;

class EventDateTimeControls extends PureComponent {
	static propTypes = {
		isEditable: PropTypes.bool.isRequired,
		onTimeZoneVisibilityChange: PropTypes.func,
		separatorDate: PropTypes.string,
		separatorTime: PropTypes.string,
		setSeparatorDate: PropTypes.func,
		setSeparatorTime: PropTypes.func,
		setTimeZone: PropTypes.func,
		showTimeZone: PropTypes.bool,
		timeZone: PropTypes.string,
	};

	/**
	 * Controls being rendered on the sidebar.
	 *
	 * @returns {ReactDOM} A React Dom Element null if none.
	 */
	renderControls = () => {
		const {
			onTimeZoneVisibilityChange,
			separatorDate,
			separatorTime,
			setSeparatorDate,
			setSeparatorTime,
			setTimeZone,
			showTimeZone,
			timeZone,
		} = this.props;

		// @todo: modify so this code does not fire unless the block is selected
		return (
			<InspectorControls key="inspector">
				<PanelBody title={ __( 'Date Time Settings', 'events-gutenberg' ) }>
					<TextControl
						label={ __( 'Date Time Separator', 'events-gutenberg' ) }
						value={ separatorDate }
						onChange={ setSeparatorDate }
						className="tribe-editor__date-time__date-time-separator-setting"
						maxLength="2"
					/>
					<TextControl
						label={ __( 'Time Range Separator', 'events-gutenberg' ) }
						value={ separatorTime }
						onChange={ setSeparatorTime }
						className="tribe-editor__date-time__time-range-separator-setting"
						maxLength="2"
					/>
					<SelectControl
						label={ __( 'Time Zone', 'events-gutenberg' ) }
						value={ timeZone }
						onChange={ setTimeZone }
						options={ timezonesAsSelectData() }
						className="tribe-editor__date-time__time-zone-setting"
					/>
					<ToggleControl
						label={ __( 'Show Time Zone', 'events-gutenberg' ) }
						checked={ showTimeZone }
						onChange={ onTimeZoneVisibilityChange }
					/>
				</PanelBody>
			</InspectorControls>
		);
	}

	render() {
		return this.props.isEditable && this.renderControls();
	}
}

export default EventDateTimeControls;
