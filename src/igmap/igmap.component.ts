import { Component, Renderer, IterableDiffers, ElementRef } from "@angular/core";
import { IgControlBase } from "../igcontrolbase/igcontrolbase";

@Component({
	selector: "ig-map",
	template: "<ng-content></ng-content>",
	inputs: ["widgetId", "options", "changeDetectionInterval","disabled","create","width","height","dataSource","dataSourceUrl","dataSourceType","responseDataKey","autoMarginWidth","autoMarginHeight","crosshairVisibility","crosshairPoint","plotAreaBackground","defaultInteraction","dragModifier","panModifier","previewRect","windowRect","zoomable","windowScale","windowResponse","windowRectMinWidth","windowPositionHorizontal","windowPositionVertical","circleMarkerTemplate","triangleMarkerTemplate","pyramidMarkerTemplate","squareMarkerTemplate","diamondMarkerTemplate","pentagonMarkerTemplate","hexagonMarkerTemplate","tetragramMarkerTemplate","pentagramMarkerTemplate","hexagramMarkerTemplate","overviewPlusDetailPaneBackgroundImageUri","useTiledZooming","preferHigherResolutionTiles","zoomTileCacheSize","backgroundContent","series","theme"],
	outputs: ["tooltipShowing","tooltipShown","tooltipHiding","tooltipHidden","browserNotSupported","seriesCursorMouseMove","seriesMouseLeftButtonDown","seriesMouseLeftButtonUp","seriesMouseMove","seriesMouseEnter","seriesMouseLeave","windowRectChanged","gridAreaRectChanged","refreshCompleted","triangulationStatusChanged"]
})
export class IgMapComponent extends IgControlBase<IgMap> { 
	constructor(el: ElementRef, renderer: Renderer, differs: IterableDiffers) { super(el, renderer, differs); }
	public option(): void { return; } ;

	/**
 	 * Destroys the widget.
	 */
	public destroy(): void { return; } ;

	/**
 	 * Returns the ID of parent element holding the map.
	 */
	public id(): string { return; } ;

	/**
 	 * Exports the map to a PNG image.
	 *
	 * @param width The width of the image.
	 * @param height The height of the image.
	 */
	public exportImage(width?: Object, height?: Object): Object { return; } ;

	/**
 	 * Notify the map that styles it draws colors from may have been updated.
	 */
	public styleUpdated(): Object { return; } ;

	/**
 	 * Resets the zoom level of the map to default.
	 */
	public resetZoom(): Object { return; } ;

	/**
 	 * Adds a new item to the data source and notifies the map.
	 *
	 * @param item     The item that we want to add to the data source.
	 * @param targetName     The name of the series bound to the data source.
	 */
	public addItem(item: Object, targetName: string): void { return; } ;

	/**
 	 * Inserts a new item to the data source and notifies the map.
	 *
	 * @param item     the new item that we want to insert in the data source.
	 * @param index     The index in the data source where the new item will be inserted.
	 * @param targetName     The name of the series bound to the data source.
	 */
	public insertItem(item: Object, index: number, targetName: string): void { return; } ;

	/**
 	 * Deletes an item from the data source and notifies the map.
	 *
	 * @param index     The index in the data source from where the item will be been removed.
	 * @param targetName     The name of the series bound to the data source.
	 */
	public removeItem(index: number, targetName: string): void { return; } ;

	/**
 	 * Updates an item in the data source and notifies the map.
	 *
	 * @param index     The index of the item in the data source that we want to change.
	 * @param item     The new item object that will be set in the data source.
	 * @param targetName     The name of the series bound to the data source.
	 */
	public setItem(index: number, item: Object, targetName: string): void { return; } ;

	/**
 	 * Notifies the the map that an item has been set in an associated data source.
	 *
	 * @param dataSource The data source in which the change happened.
	 * @param index The index in the items source that has been changed.
	 * @param newItem the new item that has been set in the collection.
	 * @param oldItem the old item that has been overwritten in the collection.
	 */
	public notifySetItem(dataSource: Object, index: number, newItem: Object, oldItem: Object): Object { return; } ;

	/**
 	 * Notifies the the map that the items have been cleared from an associated data source.
	 *                 It's not necessary to notify more than one target of a change if they share the same items source.
	 *
	 * @param dataSource The data source in which the change happened.
	 */
	public notifyClearItems(dataSource: Object): Object { return; } ;

	/**
 	 * Notifies the the target series that an item has been inserted at the specified index in its data source.
	 *                 It's not necessary to notify more than one target of a change if they share the same items source.
	 *
	 * @param dataSource The data source in which the change happened.
	 * @param index The index in the items source where the new item has been inserted.
	 * @param newItem the new item that has been set in the collection.
	 */
	public notifyInsertItem(dataSource: Object, index: number, newItem: Object): Object { return; } ;

	/**
 	 * Notifies the the target series that an item has been removed from the specified index in its data source.
	 *                 It's not necessary to notify more than one target of a change if they share the same items source.
	 *
	 * @param dataSource The data source in which the change happened.
	 * @param index The index in the items source from where the old item has been removed.
	 * @param oldItem the old item that has been removed from the collection.
	 */
	public notifyRemoveItem(dataSource: Object, index: number, oldItem: Object): Object { return; } ;

	/**
 	 * Notifies the target series or axis that it should scroll the requested data item into view.
	 *
	 * @param targetName The name of the series or axis notify.
	 * @param item The data item to bring into view, if possible.
	 */
	public scrollIntoView(targetName: string, item: Object): Object { return; } ;

	/**
 	 * Either xAxis or yAxis (longitude or latitude) that it should scale the requested value into map space from axis space.
	 * 				For example you can use this method if you want to find where longitude 50 stands scaled to map's width.
	 *
	 * @param targetName Either xAxis or yAxis to notify.
	 * @param unscaledValue The value in axis space to translate into map space.
	 */
	public scaleValue(targetName: string, unscaledValue: number): number { return; } ;

	/**
 	 * Either xAxis or yAxis (longitude or latitude) that it should unscale the requested value into axis space from map space.
	 * 				For example you can use this method if you want to find what is the longitude unscaled from 0 width of the map.
	 *
	 * @param targetName Either xAxis or yAxis to notify.
	 * @param scaledValue The value in map space to translate into axis space.
	 */
	public unscaleValue(targetName: string, scaledValue: number): number { return; } ;

	/**
 	 * Manually starts a tiled zoom if one isn't already running.
	 */
	public startTiledZoomingIfNecessary(): void { return; } ;

	/**
 	 * Manually ends a tiled zoom if one is running.
	 */
	public endTiledZoomingIfRunning(): void { return; } ;

	/**
 	 * Clears the tile zoom tile cache so that new tiles will be generated. Only applies if the viewer is using a tile based zoom..
	 */
	public clearTileZoomCache(): void { return; } ;

	/**
 	 * Forces any pending deferred work to render on the map before continuing
	 */
	public flush(): void { return; } ;

	/**
 	 * Exports visual data from the map to aid in unit testing
	 */
	public exportVisualData(): void { return; } ;

	/**
 	 * Gets the actual minimum value of the target xAxis or yAxis
	 *
	 * @param targetName 
	 */
	public getActualMinimumValue(targetName: Object): void { return; } ;

	/**
 	 * Gets the actual maximum value of the target xAxis or yAxis
	 *
	 * @param targetName 
	 */
	public getActualMaximumValue(targetName: Object): void { return; } ;

	/**
 	 * Notifies the map that the container was resized
	 */
	public notifyContainerResized(): void { return; } ;

	/**
 	 * Zoom in to the geographic region specified, when possible (may need to wait fior map to be initialized).
	 *
	 * @param rect The geographic area rectangle.
	 */
	public zoomToGeographic(rect: Object): Object { return; } ;

	/**
 	 * Given the current plot area of the control and a geographic region, get the WindowRect that would encompass that geographic region.
	 *
	 * @param rect The geographic area rectangle.
	 */
	public getGeographicFromZoom(rect: Object): Object { return; } ;

	/**
 	 * Given the current plot area of the control and a geographic region, get the WindowRect that would encompass that geographic region.
	 *
	 * @param rect The geographic area rectangle.
	 */
	public getZoomFromGeographic(rect: Object): Object { return; } ;

	/**
 	 * Creates a print preview page with the map, hiding all other elements on the page.
	 */
	public print(): void { return; } ;

	/**
 	 * Indicates that a series should render, even though no option has been modified that would normally cause it to refresh.
	 *
	 * @param targetName     The name of the series to render.
	 * @param animate     Whether the change should be animated, if possible.
	 */
	public renderSeries(targetName: string, animate: boolean): void { return; } ;
}