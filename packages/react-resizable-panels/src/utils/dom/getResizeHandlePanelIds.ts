import { PanelData } from "../../Panel";
import { getResizeHandleElement } from "./getResizeHandleElement";
import { getResizeHandleElementsForGroup } from "./getResizeHandleElementsForGroup";

export function getResizeHandlePanelIds(
  groupId: string,
  handleId: string,
  panelsArray: PanelData[],
  panelGroupElement: ParentNode
): [idBefore: string | null, idAfter: string | null] {
  const handle = getResizeHandleElement(handleId, panelGroupElement);
  const handles = getResizeHandleElementsForGroup(groupId, panelGroupElement);
  const index = handle ? handles.indexOf(handle) : -1;

  const idBefore: string | null = panelsArray[index]?.id ?? null;
  const idAfter: string | null = panelsArray[index + 1]?.id ?? null;

  return [idBefore, idAfter];
}
