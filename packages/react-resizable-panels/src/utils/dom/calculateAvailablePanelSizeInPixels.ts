import { getPanelGroupElement } from "./getPanelGroupElement";
import { getResizeHandleElementsForGroup } from "./getResizeHandleElementsForGroup";

export function calculateAvailablePanelSizeInPixels(
  groupId: string,
  panelGroupElement: HTMLElement
): number {
  if (panelGroupElement == null) {
    return NaN;
  }

  const direction = panelGroupElement.getAttribute(
    "data-panel-group-direction"
  );
  const resizeHandles = getResizeHandleElementsForGroup(
    groupId,
    panelGroupElement
  );
  if (direction === "horizontal") {
    return (
      panelGroupElement.offsetWidth -
      resizeHandles.reduce((accumulated, handle) => {
        return accumulated + handle.offsetWidth;
      }, 0)
    );
  } else {
    return (
      panelGroupElement.offsetHeight -
      resizeHandles.reduce((accumulated, handle) => {
        return accumulated + handle.offsetHeight;
      }, 0)
    );
  }
}
