import { Component, ElementRef, Renderer, IterableDiffers } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
	selector: "ig-data-chart",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","isPagePanningAllowed","syncChannel","synchronizeVertically","synchronizeHorizontally","crosshairPoint","windowRect","horizontalZoomable","verticalZoomable","windowResponse","windowRectMinWidth","overviewPlusDetailPaneVisibility","crosshairVisibility","plotAreaBackground","defaultInteraction","dragModifier","panModifier","previewRect","windowPositionHorizontal","windowPositionVertical","windowScaleHorizontal","windowScaleVertical","circleMarkerTemplate","triangleMarkerTemplate","pyramidMarkerTemplate","squareMarkerTemplate","diamondMarkerTemplate","pentagonMarkerTemplate","hexagonMarkerTemplate","tetragramMarkerTemplate","pentagramMarkerTemplate","hexagramMarkerTemplate","topMargin","leftMargin","rightMargin","bottomMargin","autoMarginWidth","autoMarginHeight","isSquare","gridMode","brushes","markerBrushes","outlines","markerOutlines","width","height","size","dataSource","dataSourceUrl","dataSourceType","responseDataKey","isSurfaceInteractionDisabled","animateSeriesWhenAxisRangeChanges","title","subtitle","titleTextStyle","titleTopMargin","titleLeftMargin","titleRightMargin","titleBottomMargin","subtitleTextStyle","subtitleTopMargin","subtitleLeftMargin","subtitleRightMargin","subtitleBottomMargin","titleTextColor","subtitleTextColor","titleHorizontalAlignment","subtitleHorizontalAlignment","highlightingTransitionDuration","useTiledZooming","preferHigherResolutionTiles","pixelScalingRatio","zoomTileCacheSize","contentHitTestMode","legend","axes","series","theme"],
	outputs: ["tooltipShowing","tooltipShown","tooltipHiding","tooltipHidden","browserNotSupported","seriesCursorMouseMove","seriesMouseLeftButtonDown","seriesMouseLeftButtonUp","seriesMouseMove","seriesMouseEnter","seriesMouseLeave","windowRectChanged","gridAreaRectChanged","refreshCompleted","axisRangeChanged","typicalBasedOn","progressiveLoadStatusChanged","assigningCategoryStyle","assigningCategoryMarkerStyle"]
})
export class IgDataChartComponent extends IgControlBase<IgDataChart> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }
	public option(): void { return; } ;

	/**
 	 * Returns the element holding the chart.
	 */
	public widget(): void { return; } ;

	/**
 	 * Returns the ID of parent element holding the chart.
	 */
	public id(): string { return; } ;

	/**
 	 * Exports the chart to a PNG image.
	 *
	 * @param width     The width of the image.
	 * @param height     The height of the image.
	 */
	public exportImage(width?: Object, height?: Object): Object { return; } ;

	/**
 	 * Destroys the widget.
	 */
	public destroy(): void { return; } ;

	/**
 	 * Notify the chart that styles it draws colors from may have been updated.
	 */
	public styleUpdated(): Object { return; } ;

	/**
 	 * Resets the zoom level of the chart to default.
	 */
	public resetZoom(): Object { return; } ;

	/**
 	 * Adds a new item to the data source and notifies the chart.
	 *
	 * @param item     The item that we want to add to the data source.
	 * @param targetName     The name of the series or axis bound to the data source. This is required only when the data is bound to series or axis. If the data is bound to dataSource of igDataChart, the second parameter should not be set.
	 */
	public addItem(item: Object, targetName: string): void { return; } ;

	/**
 	 * Inserts a new item to the data source and notifies the chart.
	 *
	 * @param item     the new item that we want to insert in the data source.
	 * @param index     The index in the data source where the new item will be inserted.
	 * @param targetName     The name of the series or axis bound to the data source.
	 */
	public insertItem(item: Object, index: number, targetName: string): void { return; } ;

	/**
 	 * Deletes an item from the data source and notifies the chart.
	 *
	 * @param index     The index in the data source from where the item will be been removed.
	 * @param targetName     The name of the series or axis bound to the data source. This is required only when the data is bound to series or axis. If the data is bound to dataSource of igDataChart, the second parameter should not be set.
	 */
	public removeItem(index: number, targetName: string): void { return; } ;

	/**
 	 * Updates an item in the data source and notifies the chart.
	 *
	 * @param index     The index of the item in the data source that we want to change.
	 * @param item     The new item object that will be set in the data source.
	 * @param targetName     The name of the series or axis bound to the data source.
	 */
	public setItem(index: number, item: Object, targetName: string): void { return; } ;

	/**
 	 * Notifies the chart that an item has been set in an associated data source.
	 *
	 * @param dataSource     The data source in which the change happened.
	 * @param index     The index in the items source that has been changed.
	 * @param newItem     the new item that has been set in the collection.
	 * @param oldItem     the old item that has been overwritten in the collection.
	 */
	public notifySetItem(dataSource: Object, index: number, newItem: Object, oldItem: Object): Object { return; } ;

	/**
 	 * Notifies the chart that the items have been cleared from an associated data source.
	 * 				It's not necessary to notify more than one target of a change if they share the same items source.
	 *
	 * @param dataSource     The data source in which the change happened.
	 */
	public notifyClearItems(dataSource: Object): Object { return; } ;

	/**
 	 * Notifies the target axis or series that an item has been inserted at the specified index in its data source.
	 * 				It's not necessary to notify more than one target of a change if they share the same items source.
	 *
	 * @param dataSource     The data source in which the change happened.
	 * @param index     The index in the items source where the new item has been inserted.
	 * @param newItem     the new item that has been set in the collection.
	 */
	public notifyInsertItem(dataSource: Object, index: number, newItem: Object): Object { return; } ;

	/**
 	 * Notifies the target axis or series that an item has been removed from the specified index in its data source.
	 * 				It's not necessary to notify more than one target of a change if they share the same items source.
	 *
	 * @param dataSource     The data source in which the change happened.
	 * @param index     The index in the items source from where the old item has been removed.
	 * @param oldItem     the old item that has been removed from the collection.
	 */
	public notifyRemoveItem(dataSource: Object, index: number, oldItem: Object): Object { return; } ;

	/**
 	 * Notifies the target axis or series that it should scroll the requested data item into view.
	 *
	 * @param targetName     The name of the axis or series notify.
	 * @param item     The data item to bring into view, if possible.
	 */
	public scrollIntoView(targetName: string, item: Object): Object { return; } ;

	/**
 	 * Notifies the target axis that it should scale the requested value into chart space from axis space.
	 * 				For example you can use this method if you want to find where value 50 of the x axis stands scaled to chart's width.
	 *
	 * @param targetName     The name of the axis to notify.
	 * @param unscaledValue     The value in axis space to translate into chart space.
	 */
	public scaleValue(targetName: string, unscaledValue: number): number { return; } ;

	/**
 	 * Notifies the target axis that it should unscale the requested value into axis space from chart space.
	 * 				For example you can use this method if you want to find what is the value of x axis unscaled from 0 width of the chart.
	 *
	 * @param targetName     The name of the axis to notify.
	 * @param scaledValue     The value in chart space to translate into axis space.
	 */
	public unscaleValue(targetName: string, scaledValue: number): number { return; } ;

	/**
 	 * For the target axis, if using enhanced interval management and precise interval fitting, this will reset the cached maximum label width, and recalculate using the current labels.
	 *
	 * @param targetName     The name of the axis to notify.
	 */
	public resetCachedEnhancedInterval(targetName: string): Object { return; } ;

	/**
 	 * Notifies the target series that something that affects its visual properties has changed and the visual output needs a repaint.
	 *
	 * @param targetName     The name of the series to notify.
	 */
	public notifyVisualPropertiesChanged(targetName: string): Object { return; } ;

	/**
 	 * Forces any pending deferred work to render on the chart before continuing
	 */
	public flush(): void { return; } ;

	/**
 	 * Exports visual data from the chart to aid in unit testing
	 */
	public exportVisualData(): void { return; } ;

	/**
 	 * Gets the actual minimum value of the target numeric or date time axis
	 *
	 * @param targetName    The name of the axis from which to get the minimum value.
	 */
	public getActualMinimumValue(targetName: string): void { return; } ;

	/**
 	 * Gets the actual maximum value of the target numeric or date time axis
	 *
	 * @param targetName    The name of the axis from which to get the maximum value.
	 */
	public getActualMaximumValue(targetName: string): void { return; } ;

	/**
 	 * Gets the actual interval of the target numeric or date time axis
	 *
	 * @param targetName    The name of the axis from which to get the interval.
	 */
	public getActualInterval(targetName: string): void { return; } ;

	/**
 	 * Creates a print preview page with the chart, hiding all other elements on the page.
	 */
	public print(): void { return; } ;

	/**
 	 * Indicates that a series should render, even though no option has been modified that would normally cause it to refresh.
	 *
	 * @param targetName     The name of the series to render.
	 * @param animate     Whether the change should be animated, if possible.
	 */
	public renderSeries(targetName: string, animate: boolean): void { return; } ;

	/**
 	 * Gets the item item index associated with the specified world position.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 */
	public getItemIndex(targetName: string, worldPoint: Object): number { return; } ;

	/**
 	 * Gets the item that is the best match for the specified world coordinates.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 */
	public getItem(targetName: string, worldPoint: Object): Object { return; } ;

	/**
 	 * For a category plotted series, gets the current width of the items within the categories. This only returns a value if the items have some form of width (e.g. columns, bars, etc.) otherwise 0 is returned.
	 *
	 * @param targetName    The name of the series to target.
	 */
	public getItemSpan(targetName: string): number { return; } ;

	/**
 	 * If possible, will return the best available main value of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesValue(targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number { return; } ;

	/**
 	 * If possible, will return the best available value bounding box within the series that has the best value match for the world position provided.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 */
	public getSeriesValueBoundingBox(targetName: string, worldPoint: Object): Object { return; } ;

	/**
 	 * If possible, will return the best available value fine grained bounding boxes within the series that have the best value match for the world position provided.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 */
	public getSeriesValueFineGrainedBoundingBoxes(targetName: string, worldPoint: Object): Object { return; } ;

	/**
 	 * If possible, will return the best available main value position of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesValuePosition(targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object { return; } ;

	/**
 	 * If possible, will return the best available main value position of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} that represents a position within the pixel space of the series.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesValuePositionFromSeriesPixel(targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object { return; } ;

	/**
 	 * If possible, will return the best available main value of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesValueFromSeriesPixel(targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number { return; } ;

	/**
 	 * If possible, will return the best available value bounding box within the series that has the best value match for the given series pixel coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
	 */
	public getSeriesValueBoundingBoxFromSeriesPixel(targetName: string, seriesPoint: Object): Object { return; } ;

	/**
 	 * If possible, will return the best available value fine grained bounding boxes within the series that have the best value match for series pixel position provided.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
	 */
	public getSeriesValueFineGrainedBoundingBoxesFromSeriesPixel(targetName: string, worldPoint: Object): Object { return; } ;

	/**
 	 * If possible, will return the best available high value of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesHighValue(targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number { return; } ;

	/**
 	 * If possible, will return the best available high value position of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesHighValuePosition(targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object { return; } ;

	/**
 	 * If possible, will return the best available high value position of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} that represents a position within the pixel space of the series.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesHighValuePositionFromSeriesPixel(targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object { return; } ;

	/**
 	 * If possible, will return the best available high value of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesHighValueFromSeriesPixel(targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number { return; } ;

	/**
 	 * If possible, will return the best available low value of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesLowValue(targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number { return; } ;

	/**
 	 * If possible, will return the best available low value position of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesLowValuePosition(targetName: string, worldPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object { return; } ;

	/**
 	 * If possible, will return the best available low value position of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} that represents a position within the pixel space of the series.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesLowValuePositionFromSeriesPixel(targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): Object { return; } ;

	/**
 	 * If possible, will return the best available low value of the series for a given world coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
	 * @param useInterpolation    If true, interpolation should be used to get in-between values, rather than only the actual values in the data set.
	 * @param skipUnknowns    If true, unknown values should be skipped.
	 */
	public getSeriesLowValueFromSeriesPixel(targetName: string, seriesPoint: Object, useInterpolation: boolean, skipUnknowns: boolean): number { return; } ;

	/**
 	 * Gets the item item index associated with the specified series pixel coordinate.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The world position (in the form {x: [number from 0 to 1], y: [number from 0 to 1]} ) that represents a position in the space of the axes.
	 */
	public getItemIndexFromSeriesPixel(targetName: string, seriesPoint: Object): number { return; } ;

	/**
 	 * Gets the item that is the best match for the specified world coordinates.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The series pixel position (in the form {x: [number], y: [number]} ) that represents a position in the pixel space of the series.
	 */
	public getItemFromSeriesPixel(targetName: string, seriesPoint: Object): Object { return; } ;

	/**
 	 * Gets the category offset for a series, if applicable.
	 *
	 * @param targetName    The name of the series to target.
	 */
	public getSeriesOffsetValue(targetName: string): number { return; } ;

	/**
 	 * Gets the category width for a series, if applicable.
	 *
	 * @param targetName    The name of the series to target.
	 */
	public getSeriesCategoryWidth(targetName: string): number { return; } ;

	/**
 	 * Replays the transition in animation for a series, if applicable.
	 *
	 * @param targetName    The name of the series to target.
	 */
	public replayTransitionIn(targetName: string): Object { return; } ;

	/**
 	 * Simulates a hover interaction over a given point in the viewport of a series.
	 *
	 * @param targetName    The name of the series to target.
	 * @param seriesPoint    The point at which to hover. Should have an x property with type number and a y property with type number.
	 */
	public simulateHover(targetName: string, seriesPoint: Object): Object { return; } ;

	/**
 	 * Moves the cursor point of the target annotation layer to the desired world coordinates.
	 *
	 * @param targetName    The name of the series to target.
	 * @param worldPoint    The point to which to move the cursor. Should have an x property with type number and a y property with type number.
	 */
	public moveCursorPoint(targetName: string, worldPoint: Object): Object { return; } ;

	/**
 	 * Manually starts a tiled zoom if one isn't already running.
	 */
	public startTiledZoomingIfNecessary(): void { return; } ;

	/**
 	 * Manually ends a tiled zoom if one is running.
	 */
	public endTiledZoomingIfRunning(): void { return; } ;

	/**
 	 * Clears the tile zoom tile cache so that new tiles will be generated. Only applies if the viewer is using a tile based zoom.
	 */
	public clearTileZoomCache(): void { return; } ;
 }

