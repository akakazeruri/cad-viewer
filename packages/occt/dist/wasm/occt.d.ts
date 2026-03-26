// TypeScript bindings for emscripten-generated code.  Automatically generated at compile time.
declare namespace RuntimeExports {
    namespace FS {
        export let root: any;
        export let mounts: any[];
        export let devices: {};
        export let streams: any[];
        export let nextInode: number;
        export let nameTable: any;
        export let currentPath: string;
        export let initialized: boolean;
        export let ignorePermissions: boolean;
        export let filesystems: any;
        export let syncFSRequests: number;
        export let readFiles: {};
        export { ErrnoError };
        export { FSStream };
        export { FSNode };
        export function lookupPath(path: any, opts?: {}): {
            path: string;
            node?: undefined;
        } | {
            path: string;
            node: any;
        };
        export function getPath(node: any): any;
        export function hashName(parentid: any, name: any): number;
        export function hashAddNode(node: any): void;
        export function hashRemoveNode(node: any): void;
        export function lookupNode(parent: any, name: any): any;
        export function createNode(parent: any, name: any, mode: any, rdev: any): any;
        export function destroyNode(node: any): void;
        export function isRoot(node: any): boolean;
        export function isMountpoint(node: any): boolean;
        export function isFile(mode: any): boolean;
        export function isDir(mode: any): boolean;
        export function isLink(mode: any): boolean;
        export function isChrdev(mode: any): boolean;
        export function isBlkdev(mode: any): boolean;
        export function isFIFO(mode: any): boolean;
        export function isSocket(mode: any): boolean;
        export function flagsToPermissionString(flag: any): string;
        export function nodePermissions(node: any, perms: any): 0 | 2;
        export function mayLookup(dir: any): any;
        export function mayCreate(dir: any, name: any): any;
        export function mayDelete(dir: any, name: any, isdir: any): any;
        export function mayOpen(node: any, flags: any): any;
        export function checkOpExists(op: any, err: any): any;
        export let MAX_OPEN_FDS: number;
        export function nextfd(): number;
        export function getStreamChecked(fd: any): any;
        export function getStream(fd: any): any;
        export function createStream(stream: any, fd?: number): any;
        export function closeStream(fd: any): void;
        export function dupStream(origStream: any, fd?: number): any;
        export function doSetAttr(stream: any, node: any, attr: any): void;
        export namespace chrdev_stream_ops {
            function open(stream: any): void;
            function llseek(): never;
        }
        export function major(dev: any): number;
        export function minor(dev: any): number;
        export function makedev(ma: any, mi: any): number;
        export function registerDevice(dev: any, ops: any): void;
        export function getDevice(dev: any): any;
        export function getMounts(mount: any): any[];
        export function syncfs(populate: any, callback: any): void;
        export function mount(type: any, opts: any, mountpoint: any): any;
        export function unmount(mountpoint: any): void;
        export function lookup(parent: any, name: any): any;
        export function mknod(path: any, mode: any, dev: any): any;
        export function statfs(path: any): any;
        export function statfsStream(stream: any): any;
        export function statfsNode(node: any): {
            bsize: number;
            frsize: number;
            blocks: number;
            bfree: number;
            bavail: number;
            files: any;
            ffree: number;
            fsid: number;
            flags: number;
            namelen: number;
        };
        export function create(path: any, mode?: number): any;
        export function mkdir(path: any, mode?: number): any;
        export function mkdirTree(path: any, mode: any): void;
        export function mkdev(path: any, mode: any, dev: any): any;
        export function symlink(oldpath: any, newpath: any): any;
        export function rename(old_path: any, new_path: any): void;
        export function rmdir(path: any): void;
        export function readdir(path: any): any;
        export function unlink(path: any): void;
        export function readlink(path: any): any;
        export function stat(path: any, dontFollow: any): any;
        export function fstat(fd: any): any;
        export function lstat(path: any): any;
        export function doChmod(stream: any, node: any, mode: any, dontFollow: any): void;
        export function chmod(path: any, mode: any, dontFollow: any): void;
        export function lchmod(path: any, mode: any): void;
        export function fchmod(fd: any, mode: any): void;
        export function doChown(stream: any, node: any, dontFollow: any): void;
        export function chown(path: any, uid: any, gid: any, dontFollow: any): void;
        export function lchown(path: any, uid: any, gid: any): void;
        export function fchown(fd: any, uid: any, gid: any): void;
        export function doTruncate(stream: any, node: any, len: any): void;
        export function truncate(path: any, len: any): void;
        export function ftruncate(fd: any, len: any): void;
        export function utime(path: any, atime: any, mtime: any): void;
        export function open(path: any, flags: any, mode?: number): any;
        export function close(stream: any): void;
        export function isClosed(stream: any): boolean;
        export function llseek(stream: any, offset: any, whence: any): any;
        export function read(stream: any, buffer: any, offset: any, length: any, position: any): any;
        export function write(stream: any, buffer: any, offset: any, length: any, position: any, canOwn: any): any;
        export function mmap(stream: any, length: any, position: any, prot: any, flags: any): any;
        export function msync(stream: any, buffer: any, offset: any, length: any, mmapFlags: any): any;
        export function ioctl(stream: any, cmd: any, arg: any): any;
        export function readFile(path: any, opts?: {}): Uint8Array<any>;
        export function writeFile(path: any, data: any, opts?: {}): void;
        export function cwd(): any;
        export function chdir(path: any): void;
        export function createDefaultDirectories(): void;
        export function createDefaultDevices(): void;
        export function createSpecialDirectories(): void;
        export function createStandardStreams(input: any, output: any, error: any): void;
        export function staticInit(): void;
        export function init(input: any, output: any, error: any): void;
        export function quit(): void;
        export function findObject(path: any, dontResolveLastLink: any): any;
        export function analyzePath(path: any, dontResolveLastLink: any): {
            isRoot: boolean;
            exists: boolean;
            error: number;
            name: any;
            path: any;
            object: any;
            parentExists: boolean;
            parentPath: any;
            parentObject: any;
        };
        export function createPath(parent: any, path: any, canRead: any, canWrite: any): any;
        export function createFile(parent: any, name: any, properties: any, canRead: any, canWrite: any): any;
        export function createDataFile(parent: any, name: any, data: any, canRead: any, canWrite: any, canOwn: any): void;
        export function createDevice(parent: any, name: any, input: any, output: any): any;
        export function forceLoadFile(obj: any): boolean;
        export function createLazyFile(parent: any, name: any, url: any, canRead: any, canWrite: any): any;
    }
}
declare class ErrnoError {
    constructor(errno: any);
    name: string;
    errno: any;
}
declare class FSStream {
    shared: {};
    set object(val: any);
    get object(): any;
    node: any;
    get isRead(): boolean;
    get isWrite(): boolean;
    get isAppend(): number;
    set flags(val: any);
    get flags(): any;
    set position(val: any);
    get position(): any;
}
declare class FSNode {
    constructor(parent: any, name: any, mode: any, rdev: any);
    node_ops: {};
    stream_ops: {};
    readMode: number;
    writeMode: number;
    mounted: any;
    parent: any;
    mount: any;
    id: number;
    name: any;
    mode: any;
    rdev: any;
    atime: number;
    mtime: number;
    ctime: number;
    set read(val: boolean);
    get read(): boolean;
    set write(val: boolean);
    get write(): boolean;
    get isFolder(): any;
    get isDevice(): any;
}
interface WasmModule {
}

type EmbindString = ArrayBuffer|Uint8Array|Uint8ClampedArray|Int8Array|string;
export interface ClassHandle {
  isAliasOf(other: ClassHandle): boolean;
  delete(): void;
  deleteLater(): this;
  isDeleted(): boolean;
  // @ts-ignore - If targeting lower than ESNext, this symbol might not exist.
  [Symbol.dispose](): void;
  clone(): this;
}
export interface VectorUInt extends ClassHandle {
  push_back(_0: number): void;
  resize(_0: number, _1: number): void;
  size(): number;
  get(_0: number): number | undefined;
  set(_0: number, _1: number): boolean;
}

export interface VectorInt extends ClassHandle {
  push_back(_0: number): void;
  resize(_0: number, _1: number): void;
  size(): number;
  get(_0: number): number | undefined;
  set(_0: number, _1: number): boolean;
}

export interface VectorFloat extends ClassHandle {
  size(): number;
  get(_0: number): number | undefined;
  push_back(_0: number): void;
  resize(_0: number, _1: number): void;
  set(_0: number, _1: number): boolean;
}

export interface VectorEdge extends ClassHandle {
  push_back(_0: Edge): void;
  resize(_0: number, _1: Edge): void;
  size(): number;
  get(_0: number): Edge | undefined;
  set(_0: number, _1: Edge): boolean;
}

export interface VectorPnt extends ClassHandle {
  push_back(_0: Pnt): void;
  resize(_0: number, _1: Pnt): void;
  size(): number;
  get(_0: number): Pnt | undefined;
  set(_0: number, _1: Pnt): boolean;
}

export interface VectorShape extends ClassHandle {
  push_back(_0: Shape): void;
  resize(_0: number, _1: Shape): void;
  size(): number;
  get(_0: number): Shape | undefined;
  set(_0: number, _1: Shape): boolean;
}

export interface VectorVal extends ClassHandle {
  size(): number;
  get(_0: number): any | undefined;
  push_back(_0: any): void;
  resize(_0: number, _1: any): void;
  set(_0: number, _1: any): boolean;
}

export interface Animation extends ClassHandle {
}

export interface AnimationCamera extends Animation {
}

export interface HandleAnimationCamera extends ClassHandle {
}

export interface DisplayModeValue<T extends number> {
  value: T;
}
export type DisplayMode = DisplayModeValue<0>|DisplayModeValue<1>;

export interface InteractiveContext extends ClassHandle {
  detectedInteractive(): HandleInteractiveObject;
  firstSelectedObject(): HandleInteractiveObject;
  selectedInteractive(): HandleInteractiveObject;
  addSelectObject(_0: HandleInteractiveObject): StatusOfPick;
  selectDetected(_0: SelectionScheme): StatusOfPick;
  displayPriority(_0: HandleInteractiveObject): DisplayPriority;
  filters(): ListOfFilter;
  defaultDrawer(): HandleDrawer;
  selectionStyle(): HandleDrawer;
  highlightStyle(_0: TypeOfHighlight): HandleDrawer;
  detectedOwner(): HandleEntityOwner;
  addSelectEntityOwner(_0: HandleEntityOwner): StatusOfPick;
  selectedOwner(): HandleEntityOwner;
  filterType(): FilterType;
  pickingStrategy(): PickingStrategy;
  selectionManager(): HandleSelectionManager;
  mainSelector(): HandleViewerSelector3d;
  location(_0: HandleInteractiveObject): Location;
  selectedShape(): Shape;
  selectRectangle(_0: Vec2I, _1: Vec2I, _2: HandleView, _3: SelectionScheme): StatusOfPick;
  selectPolygon(_0: Array1OfPnt2d, _1: HandleView, _2: SelectionScheme): StatusOfPick;
  selectPoint(_0: Vec2I, _1: HandleView, _2: SelectionScheme): StatusOfPick;
  boundingBoxOfSelection(_0: HandleView): Box;
  updateCurrentViewer(): void;
  setHighlightStyle(_0: TypeOfHighlight, _1: HandleDrawer): void;
  setSelectionStyle(_0: HandleDrawer): void;
  setDisplayPriority(_0: HandleInteractiveObject, _1: DisplayPriority): void;
  setLocation(_0: HandleInteractiveObject, _1: Location): void;
  resetLocation(_0: HandleInteractiveObject): void;
  setTransformPersistence(_0: HandleInteractiveObject, _1: HandleTransformPers): void;
  initDetected(): void;
  nextDetected(): void;
  fitSelected(_0: HandleView): void;
  initSelected(): void;
  nextSelected(): void;
  deactivate(): void;
  activatedModes(_0: HandleInteractiveObject, _1: ListOfInt): void;
  setFilterType(_0: FilterType): void;
  addFilter(_0: HandleSelectMgrFilter): void;
  removeFilter(_0: HandleSelectMgrFilter): void;
  removeFilters(): void;
  setPickingStrategy(_0: PickingStrategy): void;
  redrawImmediate(_0: HandleViewer): void;
  isDisplayed(_0: HandleInteractiveObject): boolean;
  display(_0: HandleInteractiveObject, _1: boolean): void;
  erase(_0: HandleInteractiveObject, _1: boolean): void;
  eraseAll(_0: boolean): void;
  displayAll(_0: boolean): void;
  eraseSelected(_0: boolean): void;
  displaySelected(_0: boolean): void;
  remove(_0: HandleInteractiveObject, _1: boolean): void;
  removeAll(_0: boolean): void;
  update(_0: HandleInteractiveObject, _1: boolean): void;
  highlightStyle(_0: HandleInteractiveObject, _1: HandleDrawer): boolean;
  isHilighted(_0: HandleInteractiveObject): boolean;
  hilightWithColor(_0: HandleInteractiveObject, _1: HandleDrawer, _2: boolean): void;
  unhilight(_0: HandleInteractiveObject, _1: boolean): void;
  setMaterial(_0: HandleInteractiveObject, _1: MaterialAspect, _2: boolean): void;
  unsetMaterial(_0: HandleInteractiveObject, _1: boolean): void;
  setViewAffinity(_0: HandleInteractiveObject, _1: HandleView, _2: boolean): void;
  hasLocation(_0: HandleInteractiveObject): boolean;
  unsetDisplayMode(_0: HandleInteractiveObject, _1: boolean): void;
  clearDetected(_0: boolean): boolean;
  hasDetected(): boolean;
  moreDetected(): boolean;
  hasNextDetected(): boolean;
  toHilightSelected(): boolean;
  setToHilightSelected(_0: boolean): void;
  setSelected(_0: HandleInteractiveObject, _1: boolean): void;
  addOrRemoveSelected(_0: HandleInteractiveObject, _1: boolean): void;
  automaticHilight(): boolean;
  setAutomaticHilight(_0: boolean): void;
  hilightSelected(_0: boolean): void;
  unhilightSelected(_0: boolean): void;
  updateSelected(_0: boolean): void;
  clearSelected(_0: boolean): void;
  isSelected(_0: HandleInteractiveObject): boolean;
  moreSelected(): boolean;
  hasSelectedShape(): boolean;
  beginImmediateDraw(): boolean;
  endImmediateDraw(_0: HandleView): boolean;
  endImmediateDraw(): boolean;
  isImmediateModeOn(): boolean;
  isDisplayed(_0: HandleInteractiveObject, _1: number): boolean;
  getZLayer(_0: HandleInteractiveObject): number;
  setZLayer(_0: HandleInteractiveObject, _1: number): void;
  displayMode(): number;
  setDisplayMode(_0: number, _1: boolean): void;
  setDisplayMode(_0: HandleInteractiveObject, _1: number, _2: boolean): void;
  setPixelTolerance(_0: number): void;
  pixelTolerance(): number;
  setSelectionSensitivity(_0: HandleInteractiveObject, _1: number, _2: number): void;
  hilightNextDetected(_0: HandleView, _1: boolean): number;
  hilightPreviousDetected(_0: HandleView, _1: boolean): number;
  nbSelected(): number;
  setSelectionModeActive(_0: HandleInteractiveObject, _1: number, _2: boolean, _3: SelectionModesConcurrency, _4: boolean): void;
  activate(_0: number, _1: boolean): void;
  activate(_0: HandleInteractiveObject, _1: number, _2: boolean): void;
  deactivate(_0: number): void;
  deactivate(_0: HandleInteractiveObject, _1: number): void;
  entityOwners(_0: HandleSharedIndexedMapOfOwner, _1: HandleInteractiveObject, _2: number): void;
  immediateAdd(_0: HandleInteractiveObject, _1: number): boolean;
  setPolygonOffsets(_0: HandleInteractiveObject, _1: number, _2: number, _3: number, _4: boolean): void;
  fitSelected(_0: HandleView, _1: number, _2: boolean): void;
}

export interface InteractiveContextExtend extends InteractiveContext {
  selectIndexPicked(_0: Array1OfInteger, _1: SelectionScheme): StatusOfPick;
  hilightIndexPicked(_0: number, _1: HandleView, _2: boolean): void;
}

export interface HandleInteractiveContext extends ClassHandle {
  get(): InteractiveContextExtend | null;
  defaultDrawer(): HandleDrawer;
  setLocation(_0: HandleInteractiveObject, _1: Location): void;
  remove(_0: HandleInteractiveObject, _1: boolean): void;
  display(_0: HandleInteractiveObject, _1: boolean): void;
  erase(_0: HandleInteractiveObject, _1: boolean): void;
  load(_0: HandleInteractiveObject, _1: number): void;
  setPixelTolerance(_0: number): void;
  setDisplayMode(_0: number, _1: boolean): void;
  activate(_0: number, _1: boolean): void;
}

export interface HandleInteractiveObject extends ClassHandle {
  interactiveContext(): InteractiveContext | null;
  attributes(): HandleDrawer;
  get(): InteractiveObject | null;
  resetTransformation(): void;
  setLocalTransformation(_0: Trsf): void;
  synchronizeAspects(): void;
  hasInteractiveContext(): boolean;
  hasTransformation(): boolean;
  redisplay(_0: boolean): void;
}

export interface NavigationModeValue<T extends number> {
  value: T;
}
export type NavigationMode = NavigationModeValue<0>|NavigationModeValue<1>|NavigationModeValue<2>;

export interface HandleInteractivePoint extends ClassHandle {
  interactiveContext(): InteractiveContext | null;
  attributes(): HandleDrawer;
  get(): InteractivePoint | null;
  resetTransformation(): void;
  setLocalTransformation(_0: Trsf): void;
  hasInteractiveContext(): boolean;
  hasTransformation(): boolean;
}

export interface HandleInteractiveCircle extends ClassHandle {
  get(): InteractiveCircle | null;
}

export interface HandleMultipleConnectedInteractive extends ClassHandle {
  connect(_0: HandleInteractiveObject): HandleInteractiveObject;
  get(): MultipleConnectedInteractive | null;
  disconnect(_0: HandleInteractiveObject): void;
  disconnectAll(): void;
}

export interface HandleInteractiveLine extends ClassHandle {
  get(): InteractiveLine | null;
}

export interface HandleAISShape extends ClassHandle {
  get(): AISShape | null;
}

export interface RotationModeValue<T extends number> {
  value: T;
}
export type RotationMode = RotationModeValue<0>|RotationModeValue<1>|RotationModeValue<2>|RotationModeValue<3>|RotationModeValue<4>;

export interface StatusOfDetectionValue<T extends number> {
  value: T;
}
export type StatusOfDetection = StatusOfDetectionValue<0>|StatusOfDetectionValue<1>|StatusOfDetectionValue<2>|StatusOfDetectionValue<3>|StatusOfDetectionValue<4>|StatusOfDetectionValue<5>|StatusOfDetectionValue<6>;

export interface StatusOfPickValue<T extends number> {
  value: T;
}
export type StatusOfPick = StatusOfPickValue<0>|StatusOfPickValue<1>|StatusOfPickValue<2>|StatusOfPickValue<3>|StatusOfPickValue<4>;

export interface SelectionSchemeValue<T extends number> {
  value: T;
}
export type SelectionScheme = SelectionSchemeValue<-1>|SelectionSchemeValue<0>|SelectionSchemeValue<1>|SelectionSchemeValue<2>|SelectionSchemeValue<3>|SelectionSchemeValue<4>|SelectionSchemeValue<5>;

export interface SelectionModesConcurrencyValue<T extends number> {
  value: T;
}
export type SelectionModesConcurrency = SelectionModesConcurrencyValue<0>|SelectionModesConcurrencyValue<1>|SelectionModesConcurrencyValue<2>;

export interface HandleTextLabel extends ClassHandle {
  interactiveContext(): InteractiveContext | null;
  attributes(): HandleDrawer;
  get(): TextLabel | null;
  resetTransformation(): void;
  setLocalTransformation(_0: Trsf): void;
  synchronizeAspects(): void;
  hasInteractiveContext(): boolean;
  hasTransformation(): boolean;
}

export interface ParametrizationTypeValue<T extends number> {
  value: T;
}
export type ParametrizationType = ParametrizationTypeValue<0>|ParametrizationTypeValue<1>|ParametrizationTypeValue<2>;

export interface DisplayConnection extends ClassHandle {
}

export interface HandleDisplayConnection extends ClassHandle {
  get(): DisplayConnection | null;
}

export interface ScrollDelta extends ClassHandle {
}

export interface TypeOfDisplayTextValue<T extends number> {
  value: T;
}
export type TypeOfDisplayText = TypeOfDisplayTextValue<0>|TypeOfDisplayTextValue<1>|TypeOfDisplayTextValue<2>|TypeOfDisplayTextValue<4>|TypeOfDisplayTextValue<4>|TypeOfDisplayTextValue<5>;

export interface TypeOfFacingModelValue<T extends number> {
  value: T;
}
export type TypeOfFacingModel = TypeOfFacingModelValue<0>|TypeOfFacingModelValue<1>|TypeOfFacingModelValue<2>;

export interface TypeOfLineValue<T extends number> {
  value: T;
}
export type TypeOfLine = TypeOfLineValue<-1>|TypeOfLineValue<0>|TypeOfLineValue<1>|TypeOfLineValue<2>|TypeOfLineValue<3>|TypeOfLineValue<4>;

export interface TypeOfMarkerValue<T extends number> {
  value: T;
}
export type TypeOfMarker = TypeOfMarkerValue<-1>|TypeOfMarkerValue<0>|TypeOfMarkerValue<1>|TypeOfMarkerValue<2>|TypeOfMarkerValue<3>|TypeOfMarkerValue<4>|TypeOfMarkerValue<5>|TypeOfMarkerValue<6>|TypeOfMarkerValue<7>|TypeOfMarkerValue<8>|TypeOfMarkerValue<9>|TypeOfMarkerValue<10>|TypeOfMarkerValue<11>|TypeOfMarkerValue<12>|TypeOfMarkerValue<13>;

export interface TypeOfStyleTextValue<T extends number> {
  value: T;
}
export type TypeOfStyleText = TypeOfStyleTextValue<0>|TypeOfStyleTextValue<1>;

export interface TypeOfTriedronPositionValue<T extends number> {
  value: T;
}
export type TypeOfTriedronPosition = TypeOfTriedronPositionValue<0>|TypeOfTriedronPositionValue<1>|TypeOfTriedronPositionValue<2>|TypeOfTriedronPositionValue<4>|TypeOfTriedronPositionValue<8>|TypeOfTriedronPositionValue<6>|TypeOfTriedronPositionValue<5>|TypeOfTriedronPositionValue<10>|TypeOfTriedronPositionValue<9>;

export interface Window extends ClassHandle {
}

export interface HandleWindow extends ClassHandle {
}

export interface WindowInputListener extends ClassHandle {
  pressedMouseButtons(): number;
}

export interface ViewController extends WindowInputListener {
  rotationMode: RotationMode;
  navigationMode: NavigationMode;
  showPanAnchorPoint: boolean;
  showRotateCenter: boolean;
  lockOrbitZUp: boolean;
  allowRotation: boolean;
  allowPanning: boolean;
  allowZooming: boolean;
  allowZFocus: boolean;
  allowHighlight: boolean;
  allowDragging: boolean;
  stickToRayOnZoom: boolean;
  stickToRayOnRotation: boolean;
  invertPitch: boolean;
  orbitAcceleration: number;
  handleViewEvents(_0: HandleInteractiveContext, _1: HandleView): void;
  flushViewEvents(_0: HandleInteractiveContext, _1: HandleView, _2: boolean): void;
  updateMouseScroll(_0: ScrollDelta): boolean;
  updateMousePosition(_0: Vec2I, _1: number, _2: number, _3: boolean): boolean;
  updateMouseButtons(_0: Vec2I, _1: number, _2: number, _3: boolean): boolean;
  keyDown(_0: number, _1: number, _2: number): void;
  keyUp(_0: number, _1: number): void;
}

export interface ViewControllerWrapper extends ViewController {
  lockOrbitYUp: boolean;
  setLockOrbitYUp(_0: boolean): void;
  toLockOrbitYUp(): boolean;
}

export interface TypeOfHighlightMethodValue<T extends number> {
  value: T;
}
export type TypeOfHighlightMethod = TypeOfHighlightMethodValue<0>|TypeOfHighlightMethodValue<1>;

export interface InteriorStyleValue<T extends number> {
  value: T;
}
export type InteriorStyle = InteriorStyleValue<-1>|InteriorStyleValue<0>|InteriorStyleValue<1>|InteriorStyleValue<2>|InteriorStyleValue<3>|InteriorStyleValue<-1>;

export interface Box extends ClassHandle {
  cornerMin(): Pnt;
  cornerMax(): Pnt;
}

export interface BOPAlgo_Options extends ClassHandle {
  getReport(): HandleMessageReport;
  hasErrors(): boolean;
  setFuzzyValue(_0: number): void;
}

export interface BOPAlgo_Algo extends BOPAlgo_Options {
  perform(_0: ProgressRange): void;
}

export interface BOPAlgo_BuilderShape extends BOPAlgo_Algo {
  shape(): Shape;
}

export interface BOPAlgo_Builder extends BOPAlgo_BuilderShape {
  arguments(): ListOfShape;
  clear(): void;
  addArgument(_0: Shape): void;
  setArguments(_0: ListOfShape): void;
  perform(_0: ProgressRange): void;
}

export interface BOPAlgoOperationValue<T extends number> {
  value: T;
}
export type BOPAlgoOperation = BOPAlgoOperationValue<0>|BOPAlgoOperationValue<1>|BOPAlgoOperationValue<2>|BOPAlgoOperationValue<3>|BOPAlgoOperationValue<4>|BOPAlgoOperationValue<5>;

export interface BOPAlgo_ToolsProvider extends BOPAlgo_Builder {
  tools(): ListOfShape;
  clear(): void;
  addTool(_0: Shape): void;
  setTools(_0: ListOfShape): void;
}

export interface Splitter extends BOPAlgo_ToolsProvider {
}

export interface Tool extends ClassHandle {
}

export interface BRepAdaptor_Curve extends ClassHandle {
  GetType(): CurveType;
}

export interface BRepAdaptor_Surface extends ClassHandle {
  GetType(): SurfaceType;
}

export interface Algo extends ClassHandle {
  getReport(): HandleMessageReport;
  shape(): Shape;
  isDone(): boolean;
  hasErrors(): boolean;
  setFuzzyValue(_0: number): void;
}

export interface BuilderAlgo extends Algo {
  build(_0: ProgressRange): void;
  setArguments(_0: ListOfShape): void;
}

export interface BooleanOperation extends BuilderAlgo {
  build(_0: ProgressRange): void;
  setTools(_0: ListOfShape): void;
}

export interface Check extends BOPAlgo_Options {
  perform(_0: ProgressRange): void;
  isValid(): boolean;
}

export interface Cut extends BooleanOperation {
}

export interface Fuse extends BooleanOperation {
}

export interface Common extends BooleanOperation {
}

export interface Section extends BooleanOperation {
}

export interface BrepBndLib extends ClassHandle {
}

export interface Command extends ClassHandle {
  check(): void;
  isDone(): boolean;
}

export interface MakeShape extends Command {
  shape(): Shape;
  build(_0: ProgressRange): void;
}

export interface MakeWire extends MakeShape {
  edge(): Edge;
  vertex(): Vertex;
  wire(): Wire;
  wireOrder(): Wire;
  addEdge(_0: Edge): void;
  addWire(_0: Wire): void;
  isDone(): boolean;
}

export interface MakePolygon extends MakeShape {
  edge(): Edge;
  firstVertex(): Vertex;
  lastVertex(): Vertex;
  wire(): Wire;
  add(_0: Pnt): void;
  addVertex(_0: Vertex): void;
  close(): void;
  isDone(): boolean;
  added(): boolean;
}

export interface MakeEdge extends MakeShape {
  edge(): Edge;
  isDone(): boolean;
}

export interface MakeFace extends MakeShape {
  error(): FaceError;
  face(): Face;
  add(_0: Wire): void;
  isDone(): boolean;
}

export interface ModifyShape extends MakeShape {
}

export interface Transform extends ModifyShape {
}

export interface GTransform extends ModifyShape {
  perform(_0: Shape, _1: boolean): void;
}

export interface FaceErrorValue<T extends number> {
  value: T;
}
export type FaceError = FaceErrorValue<0>|FaceErrorValue<1>|FaceErrorValue<2>|FaceErrorValue<3>|FaceErrorValue<4>;

export interface MakeSolid extends MakeShape {
}

export interface MakeEdge2d extends MakeShape {
  edge(): Edge;
  isDone(): boolean;
}

export interface MakeVertex extends MakeShape {
  vertex(): Vertex;
}

export interface TransitionModeValue<T extends number> {
  value: T;
}
export type TransitionMode = TransitionModeValue<0>|TransitionModeValue<1>|TransitionModeValue<2>;

export interface Analyzer extends ClassHandle {
  isValid(_0: Shape): boolean;
  isValid(): boolean;
}

export interface SClassifier extends ClassHandle {
  State(): TopAbsState;
  face(): Face;
  rejected(): boolean;
  isOnAFace(): boolean;
  performInfinitePoint(_0: SolidExplorer, _1: number): void;
}

export interface SolidClassifier extends SClassifier {
  load(_0: Shape): void;
  perform(_0: Pnt, _1: number): void;
}

export interface SolidExplorer extends ClassHandle {
  currentFace(): Face;
  currentShell(): Shell;
  initShape(_0: Shape): void;
  initShell(): void;
  nextShell(): void;
  initFace(): void;
  nextFace(): void;
  reject(_0: Pnt): boolean;
  moreShell(): boolean;
  moreFace(): boolean;
}

export interface ExtCC extends ClassHandle {
  isParallel(): boolean;
  isDone(): boolean;
  nbExt(): number;
  pointOnE1(_0: number): Pnt;
  pointOnE2(_0: number): Pnt;
}

export interface DistShapeShape extends ClassHandle {
  isDone(): boolean;
  nbSolution(): number;
  pointOnShape1(_0: number): Pnt;
  pointOnShape2(_0: number): Pnt;
  value(): number;
}

export interface SplitShape extends ClassHandle {
  left(): ListOfShape;
  right(): ListOfShape;
  add(_0: Edge, _1: Face): void;
  build(_0: ProgressRange): void;
}

export interface Filling extends ClassHandle {
}

export interface BrepFill extends ClassHandle {
}

export interface TypeOfContactValue<T extends number> {
  value: T;
}
export type TypeOfContact = TypeOfContactValue<0>|TypeOfContactValue<1>|TypeOfContactValue<2>;

export interface LocalOperation extends MakeShape {
  add(_0: Edge): void;
  remove(_0: Edge): void;
  reset(): void;
  contour(_0: Edge): number;
  nbEdges(_0: number): number;
  edge(_0: number, _1: number): Edge;
  closed(_0: number): boolean;
  length(_0: number): number;
}

export interface MakeFillet extends LocalOperation {
  add(_0: Edge): void;
  build(_0: ProgressRange): void;
  add(_0: number, _1: Edge): void;
  add(_0: number, _1: number, _2: Edge): void;
}

export interface BrepGProp extends ClassHandle {
}

export interface BRepLib extends ClassHandle {
}

export interface ThruSections extends MakeShape {
  addWire(_0: Wire): void;
  addVertex(_0: Vertex): void;
  build(_0: ProgressRange): void;
  setContinuity(_0: GeomAbsShape): void;
  setParType(_0: ParametrizationType): void;
  checkCompatibility(_0: boolean): void;
  setSmoothing(_0: boolean): void;
  setMaxDegree(_0: number): void;
  setCriteriumWeight(_0: number, _1: number, _2: number): void;
}

export interface MakeOffset extends MakeShape {
  addWire(_0: Wire): void;
  build(_0: ProgressRange): void;
  init(_0: Face, _1: JoinType, _2: boolean): void;
  init(_0: JoinType, _1: boolean): void;
  setApprox(_0: boolean): void;
  perform(_0: number, _1: number): void;
}

export interface MakeBox extends MakeShape {
  bottomFace(): Face;
  backFace(): Face;
  frontFace(): Face;
  leftFace(): Face;
  rightFace(): Face;
  topFace(): Face;
  shell(): Shell;
  solid(): Solid;
  build(_0: ProgressRange): void;
}

export interface MakeSweep extends MakeShape {
}

export interface MakePipe extends MakeSweep {
}

export interface MakePipeShell extends MakeSweep {
  setMode2(_0: Ax2): void;
  setMode3(_0: Dir): void;
  setTransitionMode(_0: TransitionMode): void;
  build(_0: ProgressRange): void;
  setMode1(_0: boolean): void;
  setMode4(_0: Shape): boolean;
  setMode5(_0: Wire, _1: boolean, _2: TypeOfContact): void;
  add(_0: Shape, _1: boolean, _2: boolean): void;
  add(_0: Shape, _1: Vertex, _2: boolean, _3: boolean): void;
}

export interface MakePrism extends MakeSweep {
}

export interface MakeOneAxis extends MakeShape {
  face(): Face;
  shell(): Shell;
  solid(): Solid;
  build(_0: ProgressRange): void;
}

export interface MakeCylinder extends MakeOneAxis {
}

export interface MakeSphere extends MakeOneAxis {
}

export interface MakeCone extends MakeOneAxis {
}

export interface MakeRevol extends MakeSweep {
  revol(): Revol;
  build(_0: ProgressRange): void;
}

export interface BRepProj_Projection extends ClassHandle {
  shape(): Compound;
  current(): Wire;
  next(): void;
  isDone(): boolean;
  more(): boolean;
}

export interface Revol extends ClassHandle {
  shape(): Shape;
  shape(_0: Shape): Shape;
}

export interface FClass2d extends ClassHandle {
  perform(_0: Pnt2d, _1: boolean): TopAbsState;
}

export interface BrepTools extends ClassHandle {
}

export interface BRepTools_WireExplorer extends ClassHandle {
  orientation(): Orientation;
  current(): Edge;
  currentVertex(): Vertex;
  next(): void;
  more(): boolean;
}

export interface FilletShapeValue<T extends number> {
  value: T;
}
export type FilletShape = FilletShapeValue<0>|FilletShapeValue<1>|FilletShapeValue<2>;

export interface ExtAlgoValue<T extends number> {
  value: T;
}
export type ExtAlgo = ExtAlgoValue<0>|ExtAlgoValue<1>;

export interface ExtFlagValue<T extends number> {
  value: T;
}
export type ExtFlag = ExtFlagValue<0>|ExtFlagValue<1>|ExtFlagValue<2>;

export interface FontAspectValue<T extends number> {
  value: T;
}
export type FontAspect = FontAspectValue<-1>|FontAspectValue<0>|FontAspectValue<1>|FontAspectValue<2>|FontAspectValue<3>;

export interface HandleTextFormatter extends ClassHandle {
  get(): TextFormatter | null;
}

export interface HandleFontMgr extends ClassHandle {
  get(): FontMgr | null;
}

export interface HandleSystemFont extends ClassHandle {
  get(): SystemFont | null;
  get(): SystemFont | null;
}

export interface FontHintingValue<T extends number> {
  value: T;
}
export type FontHinting = FontHintingValue<0>|FontHintingValue<1>|FontHintingValue<2>|FontHintingValue<16>|FontHintingValue<32>;

export interface Root extends ClassHandle {
  status(): ErrorType;
  isDone(): boolean;
}

export interface MakeArcOfCircle extends Root {
  value(): HandleTrimmedCurve;
}

export interface MakeCircle extends Root {
  value(): HandleGeomCircle;
}

export interface MakeEllipse extends Root {
  value(): HandleGeomEllipse;
}

export interface ErrorTypeValue<T extends number> {
  value: T;
}
export type ErrorType = ErrorTypeValue<0>|ErrorTypeValue<1>|ErrorTypeValue<2>|ErrorTypeValue<3>|ErrorTypeValue<4>|ErrorTypeValue<5>|ErrorTypeValue<6>|ErrorTypeValue<7>|ErrorTypeValue<8>|ErrorTypeValue<9>|ErrorTypeValue<10>|ErrorTypeValue<11>|ErrorTypeValue<12>|ErrorTypeValue<13>;

export interface GCE2dRoot extends ClassHandle {
}

export interface GCE2dMakeSegment extends GCE2dRoot {
}

export interface HandleCartesianPoint extends ClassHandle {
  get(): CartesianPoint | null;
}

export interface HandlePoint extends ClassHandle {
  get(): Point | null;
}

export interface HandleGeomCircle extends ClassHandle {
  get(): Circle | null;
}

export interface HandleCurve extends ClassHandle {
  get(): Curve | null;
}

export interface HandleGeomEllipse extends ClassHandle {
  get(): Ellipse | null;
}

export interface HandleGeometry extends ClassHandle {
  get(): Geometry | null;
}

export interface HandleSurface extends ClassHandle {
  get(): Surface | null;
}

export interface HandleTrimmedCurve extends ClassHandle {
  get(): TrimmedCurve | null;
}

export interface HandleGeomLine extends ClassHandle {
  get(): Line | null;
}

export interface HandlePlane extends ClassHandle {
  get(): Plane | null;
}

export interface HandleGeomConicalSurface extends ClassHandle {
  get(): ConicalSurface | null;
}

export interface HandleBoundedSurface extends ClassHandle {
  get(): BoundedSurface | null;
}

export interface HandleRectangularTrimmedSurface extends ClassHandle {
  get(): RectangularTrimmedSurface | null;
}

export interface HandleBSplineCurve extends ClassHandle {
  get(): BSplineCurve | null;
}

export interface HandleCircle2D extends ClassHandle {
  get(): Circle2D | null;
}

export interface HandleConic2D extends ClassHandle {
  get(): Conic2D | null;
}

export interface HandleCurve2D extends ClassHandle {
  get(): Curve2D | null;
}

export interface HandleGeometry2D extends ClassHandle {
  get(): Geometry2D | null;
}

export interface HandleLine2D extends ClassHandle {
  get(): Line2D | null;
}

export interface CurveTypeValue<T extends number> {
  value: T;
}
export type CurveType = CurveTypeValue<0>|CurveTypeValue<1>|CurveTypeValue<2>|CurveTypeValue<3>|CurveTypeValue<4>|CurveTypeValue<5>|CurveTypeValue<6>|CurveTypeValue<7>|CurveTypeValue<8>;

export interface GeomAbsShapeValue<T extends number> {
  value: T;
}
export type GeomAbsShape = GeomAbsShapeValue<0>|GeomAbsShapeValue<1>|GeomAbsShapeValue<2>|GeomAbsShapeValue<3>|GeomAbsShapeValue<4>|GeomAbsShapeValue<5>|GeomAbsShapeValue<6>;

export interface JoinTypeValue<T extends number> {
  value: T;
}
export type JoinType = JoinTypeValue<0>|JoinTypeValue<1>|JoinTypeValue<2>;

export interface SurfaceTypeValue<T extends number> {
  value: T;
}
export type SurfaceType = SurfaceTypeValue<0>|SurfaceTypeValue<1>|SurfaceTypeValue<2>|SurfaceTypeValue<3>|SurfaceTypeValue<4>|SurfaceTypeValue<5>|SurfaceTypeValue<6>|SurfaceTypeValue<7>|SurfaceTypeValue<8>|SurfaceTypeValue<9>|SurfaceTypeValue<10>;

export interface OrientationValue<T extends number> {
  value: T;
}
export type Orientation = OrientationValue<0>|OrientationValue<1>|OrientationValue<2>|OrientationValue<3>;

export interface IntCS extends ClassHandle {
  perform(_0: HandleCurve, _1: HandleSurface): void;
  isDone(): boolean;
  nbPoints(): number;
  point(_0: number): Pnt;
}

export interface IntSS extends ClassHandle {
  isDone(): boolean;
  nbLines(): number;
  line(_0: number): HandleCurve;
  perform(_0: HandleSurface, _1: HandleSurface, _2: number): void;
}

export interface ProjectPointOnSurf extends ClassHandle {
  getLowerDistanceParameters(): Pnt2d;
  nbPoints(): number;
}

export interface PointsToBSpline extends ClassHandle {
  curve(): HandleBSplineCurve;
  isDone(): boolean;
}

export interface TrihedronValue<T extends number> {
  value: T;
}
export type Trihedron = TrihedronValue<0>|TrihedronValue<1>|TrihedronValue<2>|TrihedronValue<3>|TrihedronValue<4>|TrihedronValue<5>|TrihedronValue<6>|TrihedronValue<7>|TrihedronValue<8>|TrihedronValue<9>;

export interface Ax1 extends ClassHandle {
  mirroredAx1(_0: Ax1): Ax1;
  reversed(): Ax1;
  mirroredAx2(_0: Ax2): Ax1;
  direction(): Dir;
  location(): Pnt;
  mirroredPnt(_0: Pnt): Ax1;
  translatedPnt(_0: Pnt, _1: Pnt): Ax1;
  transformed(_0: Trsf): Ax1;
  translatedVec(_0: Vec): Ax1;
  mirrorPnt(_0: Pnt): void;
  mirrorAx1(_0: Ax1): void;
  mirrorAx2(_0: Ax2): void;
  reverse(): void;
  setDirection(_0: Dir): void;
  setLocation(_0: Pnt): void;
  transform(_0: Trsf): void;
  translateVec(_0: Vec): void;
  translatePnt(_0: Pnt, _1: Pnt): void;
  angle(_0: Ax1): number;
  isCoaxial(_0: Ax1, _1: number, _2: number): boolean;
  isNormal(_0: Ax1, _1: number): boolean;
  isOpposite(_0: Ax1, _1: number): boolean;
  isParallel(_0: Ax1, _1: number): boolean;
  rotate(_0: Ax1, _1: number): void;
  rotated(_0: Ax1, _1: number): Ax1;
  scale(_0: Pnt, _1: number): void;
  scaled(_0: Pnt, _1: number): Ax1;
}

export interface Ax2 extends ClassHandle {
  axis(): Ax1;
  mirroredAx1(_0: Ax1): Ax2;
  mirroredAx2(_0: Ax2): Ax2;
  direction(): Dir;
  xDirection(): Dir;
  yDirection(): Dir;
  location(): Pnt;
  mirroredPnt(_0: Pnt): Ax2;
  translatedPnt(_0: Pnt, _1: Pnt): Ax2;
  transformed(_0: Trsf): Ax2;
  translatedVec(_0: Vec): Ax2;
  mirrorPnt(_0: Pnt): void;
  mirrorAx1(_0: Ax1): void;
  mirrorAx2(_0: Ax2): void;
  setAxis(_0: Ax1): void;
  setDirection(_0: Dir): void;
  setLocation(_0: Pnt): void;
  setXDirection(_0: Dir): void;
  setYDirection(_0: Dir): void;
  transform(_0: Trsf): void;
  translateVec(_0: Vec): void;
  translatePnt(_0: Pnt, _1: Pnt): void;
  angle(_0: Ax2): number;
  isCoplanarAx2(_0: Ax2, _1: number, _2: number): boolean;
  isCoplanarAx1(_0: Ax1, _1: number, _2: number): boolean;
  rotate(_0: Ax1, _1: number): void;
  rotated(_0: Ax1, _1: number): Ax2;
  scale(_0: Pnt, _1: number): void;
  scaled(_0: Pnt, _1: number): Ax2;
}

export interface Ax2d extends ClassHandle {
  mirroredAx2d(_0: Ax2d): Ax2d;
  reversed(): Ax2d;
  direction(): Dir2d;
  location(): Pnt2d;
  mirroredPnt2d(_0: Pnt2d): Ax2d;
  translatedPnt2d(_0: Pnt2d, _1: Pnt2d): Ax2d;
  transformed(_0: Trsf2d): Ax2d;
  translatedVec2d(_0: Vec2d): Ax2d;
  mirrorPnt2d(_0: Pnt2d): void;
  mirrorAx2d(_0: Ax2d): void;
  reverse(): void;
  setDirection(_0: Dir2d): void;
  setLocation(_0: Pnt2d): void;
  transform(_0: Trsf2d): void;
  translateVec2d(_0: Vec2d): void;
  translatePnt2d(_0: Pnt2d, _1: Pnt2d): void;
  angle(_0: Ax2d): number;
  isCoaxial(_0: Ax2d, _1: number, _2: number): boolean;
  isNormal(_0: Ax2d, _1: number): boolean;
  isOpposite(_0: Ax2d, _1: number): boolean;
  isParallel(_0: Ax2d, _1: number): boolean;
  rotate(_0: Pnt2d, _1: number): void;
  rotated(_0: Pnt2d, _1: number): Ax2d;
  scale(_0: Pnt2d, _1: number): void;
  scaled(_0: Pnt2d, _1: number): Ax2d;
}

export interface Ax3 extends ClassHandle {
  ax2(): Ax2;
  axis(): Ax1;
  mirroredAx1(_0: Ax1): Ax3;
  mirroredAx2(_0: Ax2): Ax3;
  direction(): Dir;
  xDirection(): Dir;
  yDirection(): Dir;
  location(): Pnt;
  mirroredPnt(_0: Pnt): Ax3;
  translatedPnt(_0: Pnt, _1: Pnt): Ax3;
  transformed(_0: Trsf): Ax3;
  translatedVec(_0: Vec): Ax3;
  mirrorPnt(_0: Pnt): void;
  mirrorAx1(_0: Ax1): void;
  mirrorAx2(_0: Ax2): void;
  setAxis(_0: Ax1): void;
  setDirection(_0: Dir): void;
  setLocation(_0: Pnt): void;
  setXDirection(_0: Dir): void;
  setYDirection(_0: Dir): void;
  transform(_0: Trsf): void;
  translateVec(_0: Vec): void;
  translatePnt(_0: Pnt, _1: Pnt): void;
  xReverse(): void;
  yReverse(): void;
  zReverse(): void;
  direct(): boolean;
  angle(_0: Ax3): number;
  isCoplanarAx3(_0: Ax3, _1: number, _2: number): boolean;
  isCoplanarAx1(_0: Ax1, _1: number, _2: number): boolean;
  rotate(_0: Ax1, _1: number): void;
  rotated(_0: Ax1, _1: number): Ax3;
  scale(_0: Pnt, _1: number): void;
  scaled(_0: Pnt, _1: number): Ax3;
}

export interface Circ extends ClassHandle {
  axis(): Ax1;
  position(): Ax2;
  xAxis(): Ax1;
  yAxis(): Ax1;
  mirroredAx1(_0: Ax1): Circ;
  mirroredAx2(_0: Ax2): Circ;
  location(): Pnt;
  mirroredPnt(_0: Pnt): Circ;
  translatedPnt(_0: Pnt, _1: Pnt): Circ;
  transformed(_0: Trsf): Circ;
  translatedVec(_0: Vec): Circ;
  setAxis(_0: Ax1): void;
  setLocation(_0: Pnt): void;
  setPosition(_0: Ax2): void;
  transform(_0: Trsf): void;
  mirrorPnt(_0: Pnt): void;
  mirrorAx1(_0: Ax1): void;
  mirrorAx2(_0: Ax2): void;
  translateVec(_0: Vec): void;
  translatePnt(_0: Pnt, _1: Pnt): void;
  setRadius(_0: number): void;
  area(): number;
  length(): number;
  radius(): number;
  distance(_0: Pnt): number;
  squareDistance(_0: Pnt): number;
  contains(_0: Pnt, _1: number): boolean;
  rotate(_0: Ax1, _1: number): void;
  rotated(_0: Ax1, _1: number): Circ;
  scale(_0: Pnt, _1: number): void;
  scaled(_0: Pnt, _1: number): Circ;
}

export interface Cone extends ClassHandle {
}

export interface Cylinder extends ClassHandle {
}

export interface Dir extends ClassHandle {
  crossCrossed(_0: Dir, _1: Dir): Dir;
  crossed(_0: Dir): Dir;
  mirroredDir(_0: Dir): Dir;
  mirroredAx1(_0: Ax1): Dir;
  mirroredAx2(_0: Ax2): Dir;
  reversed(): Dir;
  transformed(_0: Trsf): Dir;
  XYZ(): XYZ;
  cross(_0: Dir): void;
  crossCross(_0: Dir, _1: Dir): void;
  mirrorDir(_0: Dir): void;
  mirrorAx1(_0: Ax1): void;
  mirrorAx2(_0: Ax2): void;
  reverse(): void;
  setXYZ(_0: XYZ): void;
  transform(_0: Trsf): void;
  X(): number;
  Y(): number;
  Z(): number;
  angle(_0: Dir): number;
  angleWithRef(_0: Dir, _1: Dir): number;
  dot(_0: Dir): number;
  dotCross(_0: Dir, _1: Dir): number;
  isEqual(_0: Dir, _1: number): boolean;
  isNormal(_0: Dir, _1: number): boolean;
  isOpposite(_0: Dir, _1: number): boolean;
  isParallel(_0: Dir, _1: number): boolean;
  rotate(_0: Ax1, _1: number): void;
  rotated(_0: Ax1, _1: number): Dir;
  setX(_0: number): void;
  setY(_0: number): void;
  setZ(_0: number): void;
}

export interface Dir2d extends ClassHandle {
  mirroredDir2d(_0: Dir2d): Dir2d;
  mirroredAx2d(_0: Ax2d): Dir2d;
  reversed(): Dir2d;
  transformed(_0: Trsf2d): Dir2d;
  XY(): XY;
  mirrorDir2d(_0: Dir2d): void;
  mirrorAx2d(_0: Ax2d): void;
  reverse(): void;
  setXY(_0: XY): void;
  transform(_0: Trsf2d): void;
  X(): number;
  Y(): number;
  angle(_0: Dir2d): number;
  crossed(_0: Dir2d): number;
  dot(_0: Dir2d): number;
  isEqual(_0: Dir2d, _1: number): boolean;
  isNormal(_0: Dir2d, _1: number): boolean;
  isOpposite(_0: Dir2d, _1: number): boolean;
  isParallel(_0: Dir2d, _1: number): boolean;
  rotate(_0: number): void;
  rotated(_0: number): Dir2d;
  setX(_0: number): void;
  setY(_0: number): void;
}

export interface Elips extends ClassHandle {
}

export interface Elips2d extends ClassHandle {
}

export interface EulerSequenceValue<T extends number> {
  value: T;
}
export type EulerSequence = EulerSequenceValue<0>|EulerSequenceValue<1>|EulerSequenceValue<2>|EulerSequenceValue<3>|EulerSequenceValue<5>|EulerSequenceValue<6>|EulerSequenceValue<7>|EulerSequenceValue<8>|EulerSequenceValue<9>|EulerSequenceValue<10>|EulerSequenceValue<11>|EulerSequenceValue<12>|EulerSequenceValue<13>|EulerSequenceValue<14>|EulerSequenceValue<15>|EulerSequenceValue<16>|EulerSequenceValue<17>|EulerSequenceValue<18>|EulerSequenceValue<19>|EulerSequenceValue<20>|EulerSequenceValue<21>|EulerSequenceValue<22>|EulerSequenceValue<23>|EulerSequenceValue<24>|EulerSequenceValue<25>;

export interface GTrsf extends ClassHandle {
  inverted(): GTrsf;
  multiplied(_0: GTrsf): GTrsf;
  vectorialPart(): Mat;
  trsf(): Trsf;
  form(): TrsfForm;
  translationPart(): XYZ;
  invert(): void;
  multiply(_0: GTrsf): void;
  preMultiply(_0: GTrsf): void;
  setForm(): void;
  setTranslationPart(_0: XYZ): void;
  setTrsf(_0: Trsf): void;
  setVectorialPart(_0: Mat): void;
  transforms(_0: XYZ): void;
  isNegative(): boolean;
  isSingular(): boolean;
  setAffinityAx1(_0: Ax1, _1: number): void;
  setAffinityAx2(_0: Ax2, _1: number): void;
  value(_0: number, _1: number): number;
}

export interface Lin extends ClassHandle {
  direction(): Dir;
  mirroredAx1(_0: Ax1): Lin;
  mirroredAx2(_0: Ax2): Lin;
  position(): Ax1;
  reversed(): Lin;
  location(): Pnt;
  mirroredPnt(_0: Pnt): Lin;
  normal(_0: Pnt): Lin;
  translatedPnt(_0: Pnt, _1: Pnt): Lin;
  transformed(_0: Trsf): Lin;
  translatedVec(_0: Vec): Lin;
  mirrorPnt(_0: Pnt): void;
  mirrorAx1(_0: Ax1): void;
  mirrorAx2(_0: Ax2): void;
  reverse(): void;
  setDirection(_0: Dir): void;
  setLocation(_0: Pnt): void;
  setPosition(_0: Ax1): void;
  transform(_0: Trsf): void;
  translateVec(_0: Vec): void;
  translatePnt(_0: Pnt, _1: Pnt): void;
  angle(_0: Lin): number;
  contains(_0: Pnt, _1: number): boolean;
  distancePnt(_0: Pnt): number;
  distanceLin(_0: Lin): number;
  rotate(_0: Ax1, _1: number): void;
  rotated(_0: Ax1, _1: number): Lin;
  scale(_0: Pnt, _1: number): void;
  scaled(_0: Pnt, _1: number): Lin;
  squareDistancePnt(_0: Pnt): number;
  squareDistanceLin(_0: Lin): number;
}

export interface Mat extends ClassHandle {
  added(_0: Mat): Mat;
  inverted(): Mat;
  multipliedMat(_0: Mat): Mat;
  subtracted(_0: Mat): Mat;
  transposed(): Mat;
  diagonal(): XYZ;
  add(_0: Mat): void;
  invert(): void;
  multiplyMat(_0: Mat): void;
  preMultiply(_0: Mat): void;
  setCols(_0: XYZ, _1: XYZ, _2: XYZ): void;
  setCross(_0: XYZ): void;
  setDot(_0: XYZ): void;
  setIdentity(): void;
  setRows(_0: XYZ, _1: XYZ, _2: XYZ): void;
  subtract(_0: Mat): void;
  transpose(): void;
  isSingular(): boolean;
  determinant(): number;
  divide(_0: number): void;
  divided(_0: number): Mat;
  multiplied(_0: number): Mat;
  multiply(_0: number): void;
  setDiagonal(_0: number, _1: number, _2: number): void;
  setRotation(_0: XYZ, _1: number): void;
  setScale(_0: number): void;
}

export interface Mat2d extends ClassHandle {
  added(_0: Mat2d): Mat2d;
  inverted(): Mat2d;
  multipliedMat2d(_0: Mat2d): Mat2d;
  subtracted(_0: Mat2d): Mat2d;
  transposed(): Mat2d;
  diagonal(): XY;
  add(_0: Mat2d): void;
  invert(): void;
  multiplyMat2d(_0: Mat2d): void;
  preMultiply(_0: Mat2d): void;
  setCols(_0: XY, _1: XY): void;
  setIdentity(): void;
  setRows(_0: XY, _1: XY): void;
  subtract(_0: Mat2d): void;
  transpose(): void;
  isSingular(): boolean;
  determinant(): number;
  divide(_0: number): void;
  divided(_0: number): Mat2d;
  multiplied(_0: number): Mat2d;
  multiply(_0: number): void;
  setDiagonal(_0: number, _1: number): void;
  setRotation(_0: number): void;
  setScale(_0: number): void;
}

export interface Pln extends ClassHandle {
  axis(): Ax1;
  mirroredAx1(_0: Ax1): Pln;
  mirroredAx2(_0: Ax2): Pln;
  position(): Ax3;
  xAxis(): Ax1;
  yAxis(): Ax1;
  location(): Pnt;
  mirroredPnt(_0: Pnt): Pln;
  translatedPnt(_0: Pnt, _1: Pnt): Pln;
  transformed(_0: Trsf): Pln;
  translatedVec(_0: Vec): Pln;
  mirrorPnt(_0: Pnt): void;
  mirrorAx1(_0: Ax1): void;
  mirrorAx2(_0: Ax2): void;
  setAxis(_0: Ax1): void;
  setLocation(_0: Pnt): void;
  setPosition(_0: Ax3): void;
  transform(_0: Trsf): void;
  translateVec(_0: Vec): void;
  translatePnt(_0: Pnt, _1: Pnt): void;
  uReverse(): void;
  vReverse(): void;
  direct(): boolean;
  containsPnt(_0: Pnt, _1: number): boolean;
  containsLin(_0: Lin, _1: number, _2: number): boolean;
  distancePnt(_0: Pnt): number;
  distanceLin(_0: Lin): number;
  distancePln(_0: Pln): number;
  rotate(_0: Ax1, _1: number): void;
  rotated(_0: Ax1, _1: number): Pln;
  scale(_0: Pnt, _1: number): void;
  scaled(_0: Pnt, _1: number): Pln;
  squareDistancePnt(_0: Pnt): number;
  squareDistanceLin(_0: Lin): number;
  squareDistancePln(_0: Pln): number;
}

export interface Pnt extends ClassHandle {
  mirroredPnt(_0: Pnt): Pnt;
  mirroredAx1(_0: Ax1): Pnt;
  mirroredAx2(_0: Ax2): Pnt;
  translatedPnt(_0: Pnt, _1: Pnt): Pnt;
  transformed(_0: Trsf): Pnt;
  translatedVec(_0: Vec): Pnt;
  XYZ(): XYZ;
  changeCoord(): XYZ;
  setXYZ(_0: XYZ): void;
  mirrorPnt(_0: Pnt): void;
  mirrorAx1(_0: Ax1): void;
  mirrorAx2(_0: Ax2): void;
  transform(_0: Trsf): void;
  translateVec(_0: Vec): void;
  translatePnt(_0: Pnt, _1: Pnt): void;
  X(): number;
  Y(): number;
  Z(): number;
  setX(_0: number): void;
  setY(_0: number): void;
  setZ(_0: number): void;
  isEqual(_0: Pnt, _1: number): boolean;
  baryCenter(_0: number, _1: Pnt, _2: number): void;
  distance(_0: Pnt): number;
  squareDistance(_0: Pnt): number;
  rotate(_0: Ax1, _1: number): void;
  rotated(_0: Ax1, _1: number): Pnt;
  scale(_0: Pnt, _1: number): void;
  scaled(_0: Pnt, _1: number): Pnt;
}

export interface Pnt2d extends ClassHandle {
  mirroredPnt2d(_0: Pnt2d): Pnt2d;
  mirroredAx2d(_0: Ax2d): Pnt2d;
  translatedPnt2d(_0: Pnt2d, _1: Pnt2d): Pnt2d;
  transformed(_0: Trsf2d): Pnt2d;
  translatedVec2d(_0: Vec2d): Pnt2d;
  XY(): XY;
  changeCoord(): XY;
  mirrorPnt2d(_0: Pnt2d): void;
  mirrorAx2d(_0: Ax2d): void;
  setXY(_0: XY): void;
  transform(_0: Trsf2d): void;
  translateVec2d(_0: Vec2d): void;
  translatePnt2d(_0: Pnt2d, _1: Pnt2d): void;
  X(): number;
  Y(): number;
  distance(_0: Pnt2d): number;
  isEqual(_0: Pnt2d, _1: number): boolean;
  rotate(_0: Pnt2d, _1: number): void;
  rotated(_0: Pnt2d, _1: number): Pnt2d;
  scale(_0: Pnt2d, _1: number): void;
  scaled(_0: Pnt2d, _1: number): Pnt2d;
  setX(_0: number): void;
  setY(_0: number): void;
  squareDistance(_0: Pnt2d): number;
}

export interface Quaternion extends ClassHandle {
  added(_0: Quaternion): Quaternion;
  getMatrix(): Mat;
  inverted(): Quaternion;
  multiplied(_0: Quaternion): Quaternion;
  negated(): Quaternion;
  normalized(): Quaternion;
  reversed(): Quaternion;
  subtracted(_0: Quaternion): Quaternion;
  add(_0: Quaternion): void;
  invert(): void;
  multiply(_0: Quaternion): void;
  normalize(): void;
  reverse(): void;
  setIdent(): void;
  setMatrix(_0: Mat): void;
  setRotation(_0: Vec, _1: Vec): void;
  stabilizeLength(): void;
  subtract(_0: Quaternion): void;
  isEqual(_0: Quaternion): boolean;
  W(): number;
  X(): number;
  Y(): number;
  Z(): number;
  dot(_0: Quaternion): number;
  getRotationAngle(): number;
  norm(): number;
  scale(_0: number): void;
  scaled(_0: number): Quaternion;
  set(_0: number, _1: number, _2: number, _3: number): void;
  setEulerAngles(_0: EulerSequence, _1: number, _2: number, _3: number): void;
  setVectorAndAngle(_0: Vec, _1: number): void;
  squareNorm(): number;
}

export interface QuaternionNLerp extends ClassHandle {
  init(_0: Quaternion, _1: Quaternion): void;
  initFromUnit(_0: Quaternion, _1: Quaternion): void;
  interpolate(_0: number, _1: Quaternion): void;
}

export interface QuaternionSLerp extends ClassHandle {
  init(_0: Quaternion, _1: Quaternion): void;
  initFromUnit(_0: Quaternion, _1: Quaternion): void;
  interpolate(_0: number, _1: Quaternion): void;
}

export interface Sphere extends ClassHandle {
}

export interface Torus extends ClassHandle {
}

export interface Trsf extends ClassHandle {
  getRotation(): Quaternion;
  hVectorialPart(): Mat;
  inverted(): Trsf;
  multiplied(_0: Trsf): Trsf;
  vectorialPart(): Mat;
  form(): TrsfForm;
  translationPart(): XYZ;
  invert(): void;
  multiply(_0: Trsf): void;
  preMultiply(_0: Trsf): void;
  setDisplacement(_0: Ax3, _1: Ax3): void;
  setForm(_0: TrsfForm): void;
  setMirror(_0: Pnt): void;
  setRotation(_0: Quaternion): void;
  setRotationPart(_0: Quaternion): void;
  setTransformation(_0: Ax3, _1: Ax3): void;
  setTranslation(_0: Vec): void;
  setTranslationPart(_0: Vec): void;
  transforms(_0: XYZ): void;
  isNegative(): boolean;
  scaleFactor(): number;
  setRotation(_0: Ax1, _1: number): void;
  setScale(_0: Pnt, _1: number): void;
  setScaleFactor(_0: number): void;
  setValues(_0: number, _1: number, _2: number, _3: number, _4: number, _5: number, _6: number, _7: number, _8: number, _9: number, _10: number, _11: number): void;
  value(_0: number, _1: number): number;
}

export interface Trsf2d extends ClassHandle {
  hVectorialPart(): Mat2d;
  inverted(): Trsf2d;
  multiplied(_0: Trsf2d): Trsf2d;
  vectorialPart(): Mat2d;
  form(): TrsfForm;
  translationPart(): XY;
  invert(): void;
  multiply(_0: Trsf2d): void;
  preMultiply(_0: Trsf2d): void;
  setMirror(_0: Pnt2d): void;
  setTransformation(_0: Ax2d, _1: Ax2d): void;
  setTranslation(_0: Vec2d): void;
  setTranslationPart(_0: Vec2d): void;
  transforms(_0: XY): void;
  isNegative(): boolean;
  rotationPart(): number;
  scaleFactor(): number;
  setRotation(_0: Pnt2d, _1: number): void;
  setScale(_0: Pnt2d, _1: number): void;
  setScaleFactor(_0: number): void;
  setValues(_0: number, _1: number, _2: number, _3: number, _4: number, _5: number): void;
}

export interface TrsfFormValue<T extends number> {
  value: T;
}
export type TrsfForm = TrsfFormValue<0>|TrsfFormValue<1>|TrsfFormValue<2>|TrsfFormValue<3>|TrsfFormValue<4>|TrsfFormValue<5>|TrsfFormValue<6>|TrsfFormValue<7>|TrsfFormValue<8>;

export interface Vec extends ClassHandle {
  added(_0: Vec): Vec;
  crossCrossed(_0: Vec, _1: Vec): Vec;
  crossed(_0: Vec): Vec;
  mirroredVec(_0: Vec): Vec;
  mirroredAx1(_0: Ax1): Vec;
  mirroredAx2(_0: Ax2): Vec;
  normalized(): Vec;
  reversed(): Vec;
  subtracted(_0: Vec): Vec;
  transformed(_0: Trsf): Vec;
  XYZ(): XYZ;
  add(_0: Vec): void;
  cross(_0: Vec): void;
  crossCross(_0: Vec, _1: Vec): void;
  mirrorVec(_0: Vec): void;
  mirrorAx1(_0: Ax1): void;
  mirrorAx2(_0: Ax2): void;
  normalize(): void;
  reverse(): void;
  setXYZ(_0: XYZ): void;
  subtract(_0: Vec): void;
  transform(_0: Trsf): void;
  X(): number;
  Y(): number;
  Z(): number;
  angle(_0: Vec): number;
  angleWithRef(_0: Vec, _1: Vec): number;
  crossMagnitude(_0: Vec): number;
  crossSquareMagnitude(_0: Vec): number;
  divide(_0: number): void;
  divided(_0: number): Vec;
  dot(_0: Vec): number;
  dotCross(_0: Vec, _1: Vec): number;
  isEqual(_0: Vec, _1: number, _2: number): boolean;
  isNormal(_0: Vec, _1: number): boolean;
  isOpposite(_0: Vec, _1: number): boolean;
  isParallel(_0: Vec, _1: number): boolean;
  magnitude(): number;
  multiplied(_0: number): Vec;
  multiply(_0: number): void;
  rotate(_0: Ax1, _1: number): void;
  rotated(_0: Ax1, _1: number): Vec;
  scale(_0: number): void;
  scaled(_0: number): Vec;
  setLinearForm(_0: number, _1: Vec, _2: number, _3: Vec, _4: number, _5: Vec, _6: Vec): void;
  setX(_0: number): void;
  setY(_0: number): void;
  setZ(_0: number): void;
  squareMagnitude(): number;
}

export interface Vec2d extends ClassHandle {
  added(_0: Vec2d): Vec2d;
  getNormal(): Vec2d;
  mirroredVec2d(_0: Vec2d): Vec2d;
  mirroredAx2d(_0: Ax2d): Vec2d;
  normalized(): Vec2d;
  reversed(): Vec2d;
  subtracted(_0: Vec2d): Vec2d;
  transformed(_0: Trsf2d): Vec2d;
  XY(): XY;
  add(_0: Vec2d): void;
  mirrorVec2d(_0: Vec2d): void;
  mirrorAx2d(_0: Ax2d): void;
  normalize(): void;
  reverse(): void;
  setXY(_0: XY): void;
  subtract(_0: Vec2d): void;
  transform(_0: Trsf2d): void;
  X(): number;
  Y(): number;
  angle(_0: Vec2d): number;
  crossMagnitude(_0: Vec2d): number;
  crossSquareMagnitude(_0: Vec2d): number;
  crossed(_0: Vec2d): number;
  divide(_0: number): void;
  divided(_0: number): Vec2d;
  dot(_0: Vec2d): number;
  isEqual(_0: Vec2d, _1: number, _2: number): boolean;
  isNormal(_0: Vec2d, _1: number): boolean;
  isOpposite(_0: Vec2d, _1: number): boolean;
  isParallel(_0: Vec2d, _1: number): boolean;
  magnitude(): number;
  multiplied(_0: number): Vec2d;
  multiply(_0: number): void;
  rotate(_0: number): void;
  rotated(_0: number): Vec2d;
  scale(_0: number): void;
  scaled(_0: number): Vec2d;
  setLinearForm(_0: number, _1: Vec2d, _2: number, _3: Vec2d, _4: Vec2d): void;
  setX(_0: number): void;
  setY(_0: number): void;
  squareMagnitude(): number;
}

export interface Vec2f extends ClassHandle {
}

export interface Vec3f extends ClassHandle {
}

export interface XY extends ClassHandle {
  added(_0: XY): XY;
  multipliedXY(_0: XY): XY;
  multipliedMat2d(_0: Mat2d): XY;
  normalized(): XY;
  reversed(): XY;
  subtracted(_0: XY): XY;
  add(_0: XY): void;
  multiplyXY(_0: XY): void;
  multiplyMat2d(_0: Mat2d): void;
  normalize(): void;
  reverse(): void;
  subtract(_0: XY): void;
  X(): number;
  Y(): number;
  crossMagnitude(_0: XY): number;
  crossSquareMagnitude(_0: XY): number;
  crossed(_0: XY): number;
  divide(_0: number): void;
  divided(_0: number): XY;
  dot(_0: XY): number;
  isEqual(_0: XY, _1: number): boolean;
  modulus(): number;
  multiplied(_0: number): XY;
  multiply(_0: number): void;
  setLinearForm(_0: number, _1: XY, _2: number, _3: XY): void;
  setX(_0: number): void;
  setY(_0: number): void;
  squareModulus(): number;
}

export interface XYZ extends ClassHandle {
  added(_0: XYZ): XYZ;
  crossCrossed(_0: XYZ, _1: XYZ): XYZ;
  crossed(_0: XYZ): XYZ;
  multipliedXYZ(_0: XYZ): XYZ;
  multipliedMat(_0: Mat): XYZ;
  normalized(): XYZ;
  reversed(): XYZ;
  subtracted(_0: XYZ): XYZ;
  add(_0: XYZ): void;
  cross(_0: XYZ): void;
  crossCross(_0: XYZ, _1: XYZ): void;
  multiplyXYZ(_0: XYZ): void;
  multiplyMat(_0: Mat): void;
  normalize(): void;
  reverse(): void;
  subtract(_0: XYZ): void;
  X(): number;
  Y(): number;
  Z(): number;
  crossMagnitude(_0: XYZ): number;
  crossSquareMagnitude(_0: XYZ): number;
  divide(_0: number): void;
  divided(_0: number): XYZ;
  dot(_0: XYZ): number;
  dotCross(_0: XYZ, _1: XYZ): number;
  isEqual(_0: XYZ, _1: number): boolean;
  modulus(): number;
  multiplied(_0: number): XYZ;
  multiply(_0: number): void;
  setLinearForm(_0: number, _1: XYZ, _2: number, _3: XYZ, _4: number, _5: XYZ, _6: XYZ): void;
  setX(_0: number): void;
  setY(_0: number): void;
  setZ(_0: number): void;
  squareModulus(): number;
}

export interface Circ2d extends ClassHandle {
}

export interface Lin2d extends ClassHandle {
}

export interface Ax22d extends ClassHandle {
}

export interface GProps extends ClassHandle {
  centreOfMass(): Pnt;
  mass(): number;
}

export interface AlphaModeValue<T extends number> {
  value: T;
}
export type AlphaMode = AlphaModeValue<0>|AlphaModeValue<1>|AlphaModeValue<2>|AlphaModeValue<3>|AlphaModeValue<-1>;

export interface HandleAspectLine3d extends ClassHandle {
  get(): AspectLine3d | null;
}

export interface HandleAspectMarker3d extends ClassHandle {
  get(): AspectMarker3d | null;
  scale(): number;
  setScale(_0: number): void;
}

export interface HandleAspects extends ClassHandle {
  textFontAspect: FontAspect;
  interiorStyle: InteriorStyle;
  edgeLineType: TypeOfLine;
  interiorColor: Color;
  textZoomable: boolean;
  get(): Aspects | null;
}

export interface HandleAspectText3d extends ClassHandle {
  displayType: TypeOfDisplayText;
  textFontAspect: FontAspect;
  style: TypeOfStyleText;
  color: Color;
  colorSubTitle: Color;
  textZoomable: boolean;
  textAngle: number;
  get(): AspectText3d | null;
}

export interface ProjectionValue<T extends number> {
  value: T;
}
export type Projection = ProjectionValue<0>|ProjectionValue<1>|ProjectionValue<2>|ProjectionValue<3>|ProjectionValue<4>;

export interface HandleCamera extends ClassHandle {
  up(): Dir;
  eye(): Pnt;
  center(): Pnt;
  direction(): Dir;
  setUp(_0: Dir): void;
  setProjectionType(_0: Projection): void;
  orthogonalizeUp(): void;
}

export interface GraphicDriver extends ClassHandle {
}

export interface HandleGraphicDriver extends ClassHandle {
  get(): GraphicDriver | null;
}

export interface HorizontalTextAlignmentValue<T extends number> {
  value: T;
}
export type HorizontalTextAlignment = HorizontalTextAlignmentValue<0>|HorizontalTextAlignmentValue<1>|HorizontalTextAlignmentValue<2>;

export interface HandleIndexBuffer extends ClassHandle {
  get(): IndexBuffer | null;
}

export interface MarkerImage extends ClassHandle {
}

export interface RenderingParams extends ClassHandle {
  statsTextAspect: HandleAspectText3d;
  fontHinting: FontHinting;
  statsTextAspect: HandleAspectText3d;
  collectedStats: PerfCounters;
  statsPosition: HandleTransformPers;
  chartPosition: HandleTransformPers;
  shadingModel: TypeOfShadingModel;
  chartSize: Vec2I;
  method: RenderingMode;
  transparencyMethod: RenderTransparentMethod;
  toneMappingMethod: ToneMappingMethod;
  stereoMode: StereoMode;
  shadowEnabled: boolean;
  showStats: boolean;
  toEnableDepthPrepass: boolean;
  toEnableAlphaToCoverage: boolean;
  isGlobalIlluminationEnabled: boolean;
  isShadowEnabled: boolean;
  isReflectionEnabled: boolean;
  isAntialiasingEnabled: boolean;
  isTransparentShadowEnabled: boolean;
  useEnvironmentMapBackground: boolean;
  toIgnoreNormalMapInRayTracing: boolean;
  coherentPathTracingMode: boolean;
  adaptiveScreenSampling: boolean;
  adaptiveScreenSamplingAtomic: boolean;
  showSamplingTiles: boolean;
  twoSidedBsdfModels: boolean;
  rebuildRayTracingShaders: boolean;
  toReverseStereo: boolean;
  toSmoothInterlacing: boolean;
  toMirrorComposer: boolean;
  toShowStats: boolean;
  statsTextHeight: number;
  pbrEnvPow2Size: number;
  pbrEnvSpecMapNbLevels: number;
  pbrEnvBakingDiffNbSamples: number;
  pbrEnvBakingSpecNbSamples: number;
  nbOitDepthPeelingLayers: number;
  nbMsaaSamples: number;
  shadowMapResolution: number;
  samplesPerPixel: number;
  raytracingDepth: number;
  rayTracingTileSize: number;
  nbRayTracingTiles: number;
  statsTextHeight: number;
  statsNbFrames: number;
  resolution: number;
  resolution: number;
  lineFeather: number;
  pbrEnvBakingProbability: number;
  oitDepthFactor: number;
  renderResolutionScale: number;
  shadowMapBias: number;
  radianceClampingValue: number;
  cameraApertureRadius: number;
  cameraFocalPlaneDist: number;
  exposure: number;
  whitePoint: number;
  hmdFov2d: number;
  statsUpdateInterval: number;
  statsMaxChartTime: number;
}

export interface PerfCountersValue<T extends number> {
  value: T;
}
export type PerfCounters = PerfCountersValue<0>|PerfCountersValue<1>|PerfCountersValue<2>|PerfCountersValue<4>|PerfCountersValue<8>|PerfCountersValue<16>|PerfCountersValue<32>|PerfCountersValue<64>|PerfCountersValue<128>|PerfCountersValue<256>|PerfCountersValue<512>|PerfCountersValue<1024>|PerfCountersValue<2048>|PerfCountersValue<4096>|PerfCountersValue<15>|PerfCountersValue<1023>|PerfCountersValue<4095>;

export interface TextPathValue<T extends number> {
  value: T;
}
export type TextPath = TextPathValue<0>|TextPathValue<1>|TextPathValue<2>|TextPathValue<3>;

export interface TransformPers extends ClassHandle {
}

export interface HandleTransformPers extends ClassHandle {
  get(): TransformPers | null;
}

export interface TransModeFlagsValue<T extends number> {
  value: T;
}
export type TransModeFlags = TransModeFlagsValue<0>|TransModeFlagsValue<2>|TransModeFlagsValue<8>|TransModeFlagsValue<32>|TransModeFlagsValue<64>|TransModeFlagsValue<128>|TransModeFlagsValue<10>;

export interface TypeOfShadingModelValue<T extends number> {
  value: T;
}
export type TypeOfShadingModel = TypeOfShadingModelValue<-1>|TypeOfShadingModelValue<0>|TypeOfShadingModelValue<1>|TypeOfShadingModelValue<2>|TypeOfShadingModelValue<3>|TypeOfShadingModelValue<4>|TypeOfShadingModelValue<5>;

export interface Vec2I extends ClassHandle {
  setValues(_0: number, _1: number): void;
  setValues(_0: number, _1: number): void;
}

export interface Vec2D extends ClassHandle {
}

export interface Vec4 extends ClassHandle {
}

export interface VerticalTextAlignmentValue<T extends number> {
  value: T;
}
export type VerticalTextAlignment = VerticalTextAlignmentValue<0>|VerticalTextAlignmentValue<1>|VerticalTextAlignmentValue<2>|VerticalTextAlignmentValue<3>;

export interface HandleStructure extends ClassHandle {
  get(): Structure | null;
}

export interface HandleStructureManager extends ClassHandle {
  get(): StructureManager | null;
}

export interface DisplayPriorityValue<T extends number> {
  value: T;
}
export type DisplayPriority = DisplayPriorityValue<-1>|DisplayPriorityValue<0>|DisplayPriorityValue<1>|DisplayPriorityValue<2>|DisplayPriorityValue<3>|DisplayPriorityValue<4>|DisplayPriorityValue<5>|DisplayPriorityValue<6>|DisplayPriorityValue<7>|DisplayPriorityValue<8>|DisplayPriorityValue<9>|DisplayPriorityValue<10>;

export interface HandlePresentationAttributes extends ClassHandle {
  get(): PresentationAttributes | null;
}

export interface HandleSequenceOfHClipPlane extends ClassHandle {
  get(): SequenceOfHClipPlane | null;
}

export interface TypeOfStructureValue<T extends number> {
  value: T;
}
export type TypeOfStructure = TypeOfStructureValue<0>|TypeOfStructureValue<1>|TypeOfStructureValue<2>|TypeOfStructureValue<3>;

export interface HandleGroup extends ClassHandle {
  get(): Group | null;
}

export interface HandleAspectFillArea3d extends ClassHandle {
  get(): AspectFillArea3d | null;
}

export interface MaterialAspect extends ClassHandle {
}

export interface HandleArrayOfPrimitives extends ClassHandle {
  get(): ArrayOfPrimitives | null;
}

export interface HandleArrayOfTriangles extends ClassHandle {
  get(): ArrayOfTriangles | null;
}

export interface TypeOfPrimitiveArrayValue<T extends number> {
  value: T;
}
export type TypeOfPrimitiveArray = TypeOfPrimitiveArrayValue<0>|TypeOfPrimitiveArrayValue<1>|TypeOfPrimitiveArrayValue<2>|TypeOfPrimitiveArrayValue<3>|TypeOfPrimitiveArrayValue<4>|TypeOfPrimitiveArrayValue<5>|TypeOfPrimitiveArrayValue<6>|TypeOfPrimitiveArrayValue<7>|TypeOfPrimitiveArrayValue<8>|TypeOfPrimitiveArrayValue<9>|TypeOfPrimitiveArrayValue<10>|TypeOfPrimitiveArrayValue<11>|TypeOfPrimitiveArrayValue<12>|TypeOfPrimitiveArrayValue<13>;

export interface TypeOfAttributeValue<T extends number> {
  value: T;
}
export type TypeOfAttribute = TypeOfAttributeValue<0>|TypeOfAttributeValue<1>|TypeOfAttributeValue<2>|TypeOfAttributeValue<3>|TypeOfAttributeValue<4>;

export interface TypeOfDataValue<T extends number> {
  value: T;
}
export type TypeOfData = TypeOfDataValue<0>|TypeOfDataValue<1>|TypeOfDataValue<2>|TypeOfDataValue<3>|TypeOfDataValue<4>|TypeOfDataValue<5>|TypeOfDataValue<6>;

export interface Attribute extends ClassHandle {
}

export interface Array1OfAttribute extends ClassHandle {
}

export interface HandleGraphic3dBuffer extends ClassHandle {
  get(): Graphic3dBuffer | null;
}

export interface HandleArrayOfSegments extends ClassHandle {
  get(): ArrayOfSegments | null;
}

export interface Handle_Graphic3d_Text extends ClassHandle {
  get(): Graphic3d_Text | null;
}

export interface RenderingModeValue<T extends number> {
  value: T;
}
export type RenderingMode = RenderingModeValue<0>|RenderingModeValue<1>;

export interface RenderTransparentMethodValue<T extends number> {
  value: T;
}
export type RenderTransparentMethod = RenderTransparentMethodValue<0>|RenderTransparentMethodValue<1>|RenderTransparentMethodValue<2>;

export interface ToneMappingMethodValue<T extends number> {
  value: T;
}
export type ToneMappingMethod = ToneMappingMethodValue<0>|ToneMappingMethodValue<1>;

export interface StereoModeValue<T extends number> {
  value: T;
}
export type StereoMode = StereoModeValue<0>|StereoModeValue<1>|StereoModeValue<2>|StereoModeValue<3>|StereoModeValue<4>|StereoModeValue<5>|StereoModeValue<6>|StereoModeValue<7>|StereoModeValue<8>;

export interface TypeOfLightSourceValue<T extends number> {
  value: T;
}
export type TypeOfLightSource = TypeOfLightSourceValue<0>|TypeOfLightSourceValue<1>|TypeOfLightSourceValue<2>|TypeOfLightSourceValue<3>;

export interface HandleCLight extends ClassHandle {
  get(): CLight | null;
}

export interface NameOfMaterialValue<T extends number> {
  value: T;
}
export type NameOfMaterial = NameOfMaterialValue<0>|NameOfMaterialValue<1>|NameOfMaterialValue<2>|NameOfMaterialValue<3>|NameOfMaterialValue<4>|NameOfMaterialValue<5>|NameOfMaterialValue<6>|NameOfMaterialValue<7>|NameOfMaterialValue<8>|NameOfMaterialValue<9>|NameOfMaterialValue<10>|NameOfMaterialValue<11>|NameOfMaterialValue<12>|NameOfMaterialValue<13>|NameOfMaterialValue<14>|NameOfMaterialValue<15>|NameOfMaterialValue<16>|NameOfMaterialValue<17>|NameOfMaterialValue<18>|NameOfMaterialValue<19>|NameOfMaterialValue<20>|NameOfMaterialValue<21>|NameOfMaterialValue<22>|NameOfMaterialValue<23>|NameOfMaterialValue<24>|NameOfMaterialValue<25>;

export interface HandleTexture2D extends ClassHandle {
  get(): Texture2D | null;
}

export interface TextureMap extends ClassHandle {
}

export interface Texture2D extends TextureMap {
}

export interface HandleTextureMap extends ClassHandle {
  get(): TextureMap | null;
}

export interface HandleShaderProgram extends ClassHandle {
  get(): ShaderProgram | null;
}

export interface HandleShaderObject extends ClassHandle {
  get(): ShaderObject | null;
}

export interface TypeOfBackfacingModelValue<T extends number> {
  value: T;
}
export type TypeOfBackfacingModel = TypeOfBackfacingModelValue<0>|TypeOfBackfacingModelValue<1>|TypeOfBackfacingModelValue<2>|TypeOfBackfacingModelValue<3>;

export interface TypeOfShaderObjectValue<T extends number> {
  value: T;
}
export type TypeOfShaderObject = TypeOfShaderObjectValue<1>|TypeOfShaderObjectValue<2>|TypeOfShaderObjectValue<4>|TypeOfShaderObjectValue<8>|TypeOfShaderObjectValue<16>|TypeOfShaderObjectValue<32>;

export interface ImageFormatValue<T extends number> {
  value: T;
}
export type ImageFormat = ImageFormatValue<0>|ImageFormatValue<1>|ImageFormatValue<2>|ImageFormatValue<3>|ImageFormatValue<4>|ImageFormatValue<5>|ImageFormatValue<6>|ImageFormatValue<7>|ImageFormatValue<8>|ImageFormatValue<9>|ImageFormatValue<10>|ImageFormatValue<11>|ImageFormatValue<12>|ImageFormatValue<13>|ImageFormatValue<14>|ImageFormatValue<16>|ImageFormatValue<17>|ImageFormatValue<18>|ImageFormatValue<19>;

export interface ImagePixMap extends ClassHandle {
}

export interface HandleImagePixMap extends ClassHandle {
}

export interface MessageAlert extends ClassHandle {
  getMessageKey(): string;
}

export interface HandleMessageAlert extends ClassHandle {
  get(): MessageAlert | null;
}

export interface MessageGravityValue<T extends number> {
  value: T;
}
export type MessageGravity = MessageGravityValue<0>|MessageGravityValue<1>|MessageGravityValue<2>|MessageGravityValue<3>|MessageGravityValue<4>;

export interface MessageMsg extends ClassHandle {
  set(_0: EmbindString): void;
  get(): string;
  value(): string;
}

export interface ProgressRange extends ClassHandle {
}

export interface MessageReport extends ClassHandle {
  getAlerts(_0: MessageGravity): ListOfMessageAlert;
  dump(): void;
}

export interface HandleMessageReport extends ClassHandle {
  get(): MessageReport | null;
}

export interface ListOfInt extends ClassHandle {
  toArray(): VectorInt;
  size(): number;
  append(_0: number): number;
  prepend(_0: number): number;
  forEach(_0: any): void;
}

export interface ListOfShape extends ClassHandle {
  toArray(): VectorShape;
  append(_0: Shape): Shape;
  prepend(_0: Shape): Shape;
  size(): number;
  forEach(_0: any): void;
}

export interface ListOfFilter extends ClassHandle {
  toArray(): VectorVal;
  append(_0: HandleSelectMgrFilter): HandleSelectMgrFilter;
  prepend(_0: HandleSelectMgrFilter): HandleSelectMgrFilter;
  size(): number;
  forEach(_0: any): void;
}

export interface ListOfSystemFont extends ClassHandle {
  append(_0: HandleSystemFont): HandleSystemFont;
  prepend(_0: HandleSystemFont): HandleSystemFont;
  toArray(): VectorVal;
  size(): number;
  forEach(_0: any): void;
}

export interface ListOfMessageAlert extends ClassHandle {
  append(_0: HandleMessageAlert): HandleMessageAlert;
  prepend(_0: HandleMessageAlert): HandleMessageAlert;
  toArray(): VectorVal;
  size(): number;
  forEach(_0: any): void;
}

export interface BaseList extends ClassHandle {
}

export interface NCollectionBaseAllocator extends ClassHandle {
}

export interface HandleNCollectionBaseAllocator extends ClassHandle {
}

export interface Array1OfPnt2d extends ClassHandle {
  assign(_0: Array1OfPnt2d): Array1OfPnt2d;
  isEmpty(): boolean;
  size(): number;
  length(): number;
  lower(): number;
  upper(): number;
  setValue(_0: number, _1: Pnt2d): void;
  value(_0: number): Pnt2d;
}

export interface Array1OfInteger extends ClassHandle {
  assign(_0: Array1OfInteger): Array1OfInteger;
  isEmpty(): boolean;
  size(): number;
  length(): number;
  lower(): number;
  upper(): number;
  setValue(_0: number, _1: number): void;
  value(_0: number): number;
}

export interface IndexedMapOfObject extends ClassHandle {
}

export interface IndexedMapOfOwner extends ClassHandle {
}

export interface SharedIndexedMapOfOwner extends ClassHandle {
}

export interface HandleSharedIndexedMapOfOwner extends ClassHandle {
}

export interface DefaultHasherOfEntityOwner extends ClassHandle {
}

export interface NCollectionUtf8String extends ClassHandle {
}

export interface TListIteratorOfShape extends ClassHandle {
  value(): Shape;
  next(): void;
  more(): boolean;
}

export interface OpenGlGraphicDriver extends GraphicDriver {
  setBuffersNoSwap(_0: boolean): void;
  initContext(): boolean;
}

export interface HandleOpenGlGraphicDriver extends ClassHandle {
  get(): OpenGlGraphicDriver | null;
}

export interface DatumAspect extends ClassHandle {
  setTextAspect(_0: HandleTextAspect): void;
}

export interface HandleDatumAspect extends ClassHandle {
  readonly $: DatumAspect | null;
}

export interface HandleDrawer extends ClassHandle {
  datumAspect(): HandleDatumAspect;
  lineAspect(): HandleLineAspect;
  wireAspect(): HandleLineAspect;
  faceBoundaryAspect(): HandleLineAspect;
  pointAspect(): HandlePointAspect;
  shadingAspect(): HandleShadingAspect;
  textAspect(): HandleTextAspect;
  get(): Drawer | null;
  setDatumAspect(_0: HandleDatumAspect): void;
  setShadingAspect(_0: HandleShadingAspect): void;
  setPointAspect(_0: HandlePointAspect): void;
  setLineAspect(_0: HandleLineAspect): void;
  setWireAspect(_0: HandleLineAspect): void;
  setFaceBoundaryAspect(_0: HandleLineAspect): void;
  setTextAspect(_0: HandleTextAspect): void;
  link(_0: HandleDrawer): void;
  hasOwnShadingAspect(): boolean;
  hasOwnPointAspect(): boolean;
  hasOwnLineAspect(): boolean;
  hasOwnWireAspect(): boolean;
  setWireDraw(_0: boolean): void;
  hasOwnFaceBoundaryAspect(): boolean;
  setFaceBoundaryDraw(_0: boolean): void;
  hasOwnTextAspect(): boolean;
  hasOwnDeviationAngle(): boolean;
  hasOwnIsAutoTriangulation(): boolean;
  isAutoTriangulation(): boolean;
  setAutoTriangulation(_0: boolean): void;
  deviationAngle(): number;
  setDeviationAngle(_0: number): void;
}

export interface LineAspect extends ClassHandle {
  aspect(): HandleAspectLine3d;
  setColor(_0: Color): void;
  setTypeOfLine(_0: TypeOfLine): void;
  setWidth(_0: number): void;
}

export interface HandleLineAspect extends ClassHandle {
  get(): LineAspect | null;
  aspect(): HandleAspectLine3d;
  setColor(_0: Color): void;
  setTypeOfLine(_0: TypeOfLine): void;
  setWidth(_0: number): void;
}

export interface PointAspect extends ClassHandle {
  aspect(): HandleAspectMarker3d;
  setColor(_0: Color): void;
  setTypeOfMarker(_0: TypeOfMarker): void;
  setAspect(_0: HandleAspectMarker3d): void;
  setScale(_0: number): void;
}

export interface HandlePointAspect extends ClassHandle {
  get(): PointAspect | null;
  aspect(): HandleAspectMarker3d;
  setAspect(_0: HandleAspectMarker3d): void;
  setScale(_0: number): void;
}

export interface ShadingAspect extends ClassHandle {
  color(_0: TypeOfFacingModel): Color;
  setColor(_0: Color, _1: TypeOfFacingModel): void;
  setTransparency(_0: number, _1: TypeOfFacingModel): void;
  transparency(_0: TypeOfFacingModel): number;
}

export interface HandleShadingAspect extends ClassHandle {
  get(): ShadingAspect | null;
  aspect(): HandleAspectFillArea3d;
  color(): Color;
  setColor(_0: Color, _1: TypeOfFacingModel): void;
  transparency(): number;
  setTransparency(_0: number, _1: TypeOfFacingModel): void;
}

export interface TextAspect extends ClassHandle {
}

export interface HandleTextAspect extends ClassHandle {
  horizontalJustification: HorizontalTextAlignment;
  verticalJustification: VerticalTextAlignment;
  orientation: TextPath;
  height: number;
  angle: number;
  get(): TextAspect | null;
  aspect(): HandleAspectText3d;
  setColor(_0: Color): void;
  setFont(_0: EmbindString): void;
}

export interface TypeOfHighlightValue<T extends number> {
  value: T;
}
export type TypeOfHighlight = TypeOfHighlightValue<0>|TypeOfHighlightValue<1>|TypeOfHighlightValue<2>|TypeOfHighlightValue<3>|TypeOfHighlightValue<4>|TypeOfHighlightValue<5>|TypeOfHighlightValue<6>;

export interface Prs3dRoot extends ClassHandle {
}

export interface Prs3dArrow extends ClassHandle {
}

export interface Prs3dBndBox extends ClassHandle {
}

export interface Prs3dText extends ClassHandle {
}

export interface Prs3dToolQuadric extends ClassHandle {
}

export interface Prs3dToolCylinder extends Prs3dToolQuadric {
}

export interface Prs3dToolDisk extends Prs3dToolQuadric {
  setAngleRange(_0: number, _1: number): void;
}

export interface Prs3dToolSector extends Prs3dToolQuadric {
}

export interface Prs3dToolSphere extends Prs3dToolQuadric {
}

export interface Prs3dToolTorus extends Prs3dToolQuadric {
}

export interface HandlePresentableObject extends ClassHandle {
  attributes(): HandleDrawer;
  get(): PresentableObject | null;
  addChild(_0: HandlePresentableObject): void;
}

export interface HandlePresentationManager extends ClassHandle {
  structureManager(): HandleStructureManager;
  get(): PresentationManager | null;
  addToImmediateList(_0: HandleStructure): void;
  isImmediateModeOn(): boolean;
  display(_0: HandlePresentableObject, _1: number): void;
  erase(_0: HandlePresentableObject, _1: number): void;
}

export interface TypeOfPresentation3dValue<T extends number> {
  value: T;
}
export type TypeOfPresentation3d = TypeOfPresentation3dValue<0>|TypeOfPresentation3dValue<1>;

export interface Color extends ClassHandle {
}

export interface ColorRGBA extends ClassHandle {
}

export interface TypeOfColorValue<T extends number> {
  value: T;
}
export type TypeOfColor = TypeOfColorValue<0>|TypeOfColorValue<1>|TypeOfColorValue<2>|TypeOfColorValue<3>|TypeOfColorValue<4>;

export interface HandleSensitiveEntity extends ClassHandle {
  get(): SensitiveEntity | null;
}

export interface HandleSensitivePrimitiveArray extends ClassHandle {
  get(): SensitivePrimitiveArray | null;
}

export interface HandleSensitiveSet extends ClassHandle {
  get(): SensitiveSet | null;
}

export interface HandleSensitiveGroup extends ClassHandle {
  get(): SensitiveGroup | null;
}

export interface HandleSensitivePoint extends ClassHandle {
  get(): SensitivePoint | null;
}

export interface HandleSensitiveSegment extends ClassHandle {
  get(): SensitiveSegment | null;
}

export interface HandleSelectableObject extends ClassHandle {
  get(): SelectableObject | null;
}

export interface HandleSelection extends ClassHandle {
  get(): Selection | null;
}

export interface HandleEntityOwner extends ClassHandle {
  get(): EntityOwner | null;
}

export interface FilterTypeValue<T extends number> {
  value: T;
}
export type FilterType = FilterTypeValue<0>|FilterTypeValue<1>;

export interface HandleSelectMgrFilter extends ClassHandle {
  get(): SelectMgrFilter | null;
}

export interface PickingStrategyValue<T extends number> {
  value: T;
}
export type PickingStrategy = PickingStrategyValue<0>|PickingStrategyValue<1>;

export interface HandleSelectionManager extends ClassHandle {
  get(): SelectionManager | null;
}

export interface Failure extends ClassHandle {
  getMessageString(): string;
}

export interface Transient extends ClassHandle {
  getRefCount(): number;
}

export interface Sewing extends Transient {
  sewedShape(): Shape;
  load(_0: Shape): void;
  add(_0: Shape): void;
  perform(_0: ProgressRange): void;
  init(_0: number, _1: boolean, _2: boolean, _3: boolean, _4: boolean): void;
}

export interface DiscretRoot extends Transient {
  shape(): Shape;
  setShape(_0: Shape): void;
  isDone(): boolean;
}

export interface IncrementalMesh extends DiscretRoot {
  perform(_0: ProgressRange): void;
  perform(_0: ProgressRange): void;
}

export interface TextFormatter extends Transient {
}

export interface FontMgr extends Transient {
  getAvailableFonts(): ListOfSystemFont;
  initFontDataBase(): void;
  registerFont(_0: HandleSystemFont, _1: boolean): boolean;
  setTraceAliases(_0: boolean): void;
  addFontAlias(_0: EmbindString, _1: EmbindString): boolean;
}

export interface SystemFont extends Transient {
  hasFontAspect(_0: FontAspect): boolean;
  setFontPath(_0: EmbindString, _1: FontAspect, _2: number): void;
  fontName(): string;
}

export interface Geometry extends Transient {
  transform(_0: Trsf): void;
}

export interface Point extends Geometry {
  X(): number;
  Y(): number;
  Z(): number;
  distance(_0: HandlePoint): number;
  squareDistance(_0: HandlePoint): number;
}

export interface CartesianPoint extends Point {
  transform(_0: Trsf): void;
}

export interface Curve extends Geometry {
}

export interface BoundedCurve extends Curve {
  endPoint(): Pnt;
  startPoint(): Pnt;
}

export interface TrimmedCurve extends BoundedCurve {
  basisCurve(): HandleCurve;
  transform(_0: Trsf): void;
}

export interface BSplineCurve extends BoundedCurve {
}

export interface Conic extends Curve {
  axis(): Ax1;
  location(): Pnt;
  position(): Ax2;
  setAxis(_0: Ax1): void;
  setLocation(_0: Pnt): void;
  setPosition(_0: Ax2): void;
}

export interface Circle extends Conic {
  circ(): Circ;
  setCirc(_0: Circ): void;
  transform(_0: Trsf): void;
  radius(): number;
  setRadius(_0: number): void;
}

export interface Ellipse extends Conic {
  elips(): Elips;
  transform(_0: Trsf): void;
}

export interface Line extends Curve {
  lin(): Lin;
  setLin(_0: Lin): void;
  setDirection(_0: Dir): void;
  setLocation(_0: Pnt): void;
  setPosition(_0: Ax1): void;
  transform(_0: Trsf): void;
}

export interface Surface extends Geometry {
  D0(_0: number, _1: number, _2: Pnt): void;
  D1(_0: number, _1: number, _2: Pnt, _3: Vec, _4: Vec): void;
  value(_0: number, _1: number): Pnt;
}

export interface ElementarySurface extends Surface {
  axis(): Ax1;
  location(): Pnt;
  position(): Ax3;
  setAxis(_0: Ax1): void;
  setLocation(_0: Pnt): void;
  setPosition(_0: Ax3): void;
}

export interface CylindricalSurface extends ElementarySurface {
}

export interface Plane extends ElementarySurface {
}

export interface ConicalSurface extends ElementarySurface {
  cone(): Cone;
  setCone(_0: Cone): void;
  setRadius(_0: number): void;
  SetSemiAngle(_0: number): void;
}

export interface BoundedSurface extends Surface {
}

export interface RectangularTrimmedSurface extends BoundedSurface {
}

export interface Geometry2D extends Transient {
  transformed(_0: Trsf2d): HandleGeometry2D;
  transform(_0: Trsf2d): void;
  translate(_0: Vec2d): void;
  translate(_0: Pnt2d, _1: Pnt2d): void;
  rotate(_0: Pnt2d, _1: number): void;
  rotated(_0: Pnt2d, _1: number): HandleGeometry2D;
  scale(_0: Pnt2d, _1: number): void;
  scaled(_0: Pnt2d, _1: number): HandleGeometry2D;
}

export interface Curve2D extends Geometry2D {
  reversed(): HandleCurve2D;
  reversed(): HandleCurve2D;
  reverse(): void;
  isClosed(): boolean;
}

export interface Conic2D extends Curve2D {
  location(): Pnt2d;
  position(): Ax22d;
  xAxis(): Ax2d;
  yAxis(): Ax2d;
  reverse(): void;
  setAxis(_0: Ax22d): void;
  setXAxis(_0: Ax2d): void;
  setYAxis(_0: Ax2d): void;
  setLocation(_0: Pnt2d): void;
  eccentricity(): number;
}

export interface Circle2D extends Conic2D {
  setCirc2d(_0: Circ2d): void;
  transform(_0: Trsf2d): void;
  isClosed(): boolean;
  isPeriodic(): boolean;
  isClosed(): boolean;
  setRadius(_0: number): void;
  radius(): number;
  eccentricity(): number;
}

export interface Line2D extends Curve2D {
  direction(): Dir2d;
  location(): Pnt2d;
  position(): Ax2d;
  lin2d(): Lin2d;
  setDirection(_0: Dir2d): void;
  setLocation(_0: Pnt2d): void;
  setPosition(_0: Ax2d): void;
  setLin2d(_0: Lin2d): void;
  reverse(): void;
  transform(_0: Trsf2d): void;
  distance(_0: Pnt2d): number;
}

export interface Aspects extends Transient {
  interiorStyle: InteriorStyle;
  interiorColor: Color;
  edgeLineType: TypeOfLine;
  setTextureMap(_0: HandleTextureMap): void;
  setShaderProgram(_0: HandleShaderProgram): void;
  setFaceCulling(_0: TypeOfBackfacingModel): void;
  setColor(_0: Color): void;
  setLineType(_0: TypeOfLine): void;
  setLineStippleFactor(_0: number): void;
  setAlphaMode(_0: AlphaMode, _1: number): void;
  setLineWidth(_0: number): void;
}

export interface AspectLine3d extends Aspects {
}

export interface AspectMarker3d extends Aspects {
}

export interface AspectText3d extends Aspects {
  setFont(_0: EmbindString): void;
}

export interface AspectFillArea3d extends Aspects {
}

export interface Structure extends Transient {
  newGroup(): HandleGroup;
  display(): void;
  erase(): void;
  setTransformPersistence(_0: HandleTransformPers): void;
  highlight(_0: HandlePresentationAttributes, _1: boolean): void;
  setZLayer(_0: number): void;
}

export interface PresentationShadow extends Structure {
}

export interface StructureManager extends Transient {
}

export interface PresentationAttributes extends Transient {
  method(): TypeOfHighlightMethod;
  colorRGBA(): ColorRGBA;
  color(): Color;
  basicFillAreaAspect(): HandleAspectFillArea3d;
  setMethod(_0: TypeOfHighlightMethod): void;
  setColor(_0: Color): void;
  setBasicFillAreaAspect(_0: HandleAspectFillArea3d): void;
  zLayer(): number;
  setZLayer(_0: number): void;
  displayMode(): number;
  setDisplayMode(_0: number): void;
  transparency(): number;
  setTransparency(_0: number): void;
}

export interface Drawer extends PresentationAttributes {
  datumAspect(): HandleDatumAspect;
  shadingAspect(): HandleShadingAspect;
  pointAspect(): HandlePointAspect;
  lineAspect(): HandleLineAspect;
  wireAspect(): HandleLineAspect;
  faceBoundaryAspect(): HandleLineAspect;
  textAspect(): HandleTextAspect;
  setDatumAspect(_0: HandleDatumAspect): void;
  setShadingAspect(_0: HandleShadingAspect): void;
  setPointAspect(_0: HandlePointAspect): void;
  setLineAspect(_0: HandleLineAspect): void;
  setWireAspect(_0: HandleLineAspect): void;
  setFaceBoundaryAspect(_0: HandleLineAspect): void;
  setTextAspect(_0: HandleTextAspect): void;
  link(_0: HandleDrawer): void;
  hasOwnShadingAspect(): boolean;
  hasOwnPointAspect(): boolean;
  hasOwnLineAspect(): boolean;
  hasOwnWireAspect(): boolean;
  setWireDraw(_0: boolean): void;
  hasOwnFaceBoundaryAspect(): boolean;
  setFaceBoundaryDraw(_0: boolean): void;
  hasOwnTextAspect(): boolean;
  hasOwnDeviationAngle(): boolean;
  hasOwnIsAutoTriangulation(): boolean;
  isAutoTriangulation(): boolean;
  setAutoTriangulation(_0: boolean): void;
  deviationAngle(): number;
  setDeviationAngle(_0: number): void;
}

export interface SequenceOfHClipPlane extends Transient {
}

export interface Group extends Transient {
  setGroupPrimitivesAspect(_0: HandleAspects): void;
  setPrimitivesAspect(_0: HandleAspects): void;
  setTransformPersistence(_0: HandleTransformPers): void;
  clear(_0: boolean): void;
  addText(_0: Handle_Graphic3d_Text, _1: boolean): void;
  addPrimitiveArray(_0: HandleArrayOfPrimitives, _1: boolean): void;
  setClosed(_0: boolean): void;
  setMinMaxValues(_0: number, _1: number, _2: number, _3: number, _4: number, _5: number): void;
}

export interface ArrayOfPrimitives extends Transient {
  type(): TypeOfPrimitiveArray;
  attributes(): HandleGraphic3dBuffer;
  indices(): HandleIndexBuffer;
  attributes(): HandleGraphic3dBuffer;
  hasVertexNormals(): boolean;
  hasVertexColors(): boolean;
  hasVertexTexels(): boolean;
  vertexNumber(): number;
  vertexNumberAllocated(): number;
  edgeNumber(): number;
  edgeNumberAllocated(): number;
  addEdge(_0: number): number;
  addEdges(_0: number, _1: number, _2: number): number;
  addSegmentEdges(_0: number, _1: number): number;
  addVertex(_0: number, _1: number, _2: number): number;
  addVertex(_0: number, _1: number, _2: number, _3: number, _4: number, _5: number): number;
  addVertex(_0: number, _1: number, _2: number, _3: number, _4: number, _5: number, _6: number, _7: number): number;
  addVertex(_0: number, _1: number, _2: number, _3: number, _4: number): number;
  addVertex(_0: number, _1: number, _2: number, _3: Color): number;
  addVertex(_0: number, _1: number, _2: number, _3: number, _4: number, _5: number, _6: number, _7: number, _8: number): number;
  setVertexColor(_0: number, _1: number, _2: number, _3: number): void;
  getIndicesBytes(): any;
  getAttributesBytes(): any;
}

export interface ArrayOfTriangles extends ArrayOfPrimitives {
}

export interface ArrayOfTrianglesExtend extends ArrayOfTriangles {
}

export interface ArrayOfSegments extends ArrayOfPrimitives {
}

export interface ArrayOfSegmentsExtend extends ArrayOfSegments {
}

export interface Graphic3d_Text extends Transient {
  setOrientation(_0: Ax2): void;
  setPosition(_0: Pnt): void;
  setHorizontalAlignment(_0: HorizontalTextAlignment): void;
  setVerticalAlignment(_0: VerticalTextAlignment): void;
  setOwnAnchorPoint(_0: boolean): void;
  hasOwnAnchorPoint(): boolean;
  setHeight(_0: number): void;
  setText(_0: EmbindString): void;
}

export interface CLight extends Transient {
  setIntensity(_0: number): void;
}

export interface ShaderProgram extends Transient {
  clearVariables(): void;
  attachShader(_0: HandleShaderObject): boolean;
  isDone(): boolean;
  setHeader(_0: EmbindString): void;
  pushVariableVec2(_0: EmbindString, _1: Vec2f): boolean;
  pushVariableVec3(_0: EmbindString, _1: Vec3f): boolean;
  pushVariableFloat(_0: EmbindString, _1: number): boolean;
  pushVariableVec4(_0: EmbindString, _1: Vec4): boolean;
}

export interface ShaderObject extends Transient {
}

export interface NCollectionBuffer extends Transient {
}

export interface Graphic3dBuffer extends NCollectionBuffer {
}

export interface IndexBuffer extends Graphic3dBuffer {
}

export interface PresentableObject extends Transient {
  attributes(): HandleDrawer;
  attributes(): HandleDrawer;
  attributes(): HandleDrawer;
  hilightAttributes(): HandleDrawer;
  dynamicHilightAttributes(): HandleDrawer;
  setTransformPersistence(_0: HandleTransformPers): void;
  setLocalTransformation(_0: Trsf): void;
  setAttributes(_0: HandleDrawer): void;
  setHilightAttributes(_0: HandleDrawer): void;
  setDynamicHilightAttributes(_0: HandleDrawer): void;
  synchronizeAspects(): void;
  addChild(_0: HandlePresentableObject): void;
  hasTransformation(): boolean;
  acceptDisplayMode(_0: number): boolean;
  displayMode(): number;
  setDisplayMode(_0: number): void;
  setHilightMode(_0: number): void;
  setToUpdate(_0: number): void;
}

export interface SelectableObject extends PresentableObject {
  resetTransformation(): void;
  hilightOwnerWithColor(_0: HandlePresentationManager, _1: HandleDrawer, _2: HandleEntityOwner): void;
  computeSelection(_0: HandleSelection, _1: number): void;
  updateSelection(_0: number): void;
}

export interface InteractiveObject extends SelectableObject {
  interactiveContext(): InteractiveContext | null;
  hasInteractiveContext(): boolean;
  redisplay(_0: boolean): void;
  acceptDisplayMode(_0: number): boolean;
}

export interface AbstractInteractiveObject extends InteractiveObject {
  notifyOnDestruction(): void;
}

export interface InteractivePoint extends InteractiveObject {
}

export interface InteractiveCircle extends InteractiveObject {
  setColor(_0: Color): void;
  unsetColor(): void;
  unsetWidth(): void;
  setCircle(_0: HandleGeomCircle): void;
  setWidth(_0: number): void;
  setFirstParam(_0: number): void;
  setLastParam(_0: number): void;
}

export interface MultipleConnectedInteractive extends InteractiveObject {
  connect(_0: HandleInteractiveObject): HandleInteractiveObject;
  disconnect(_0: HandleInteractiveObject): void;
  disconnectAll(): void;
}

export interface InteractiveLine extends InteractiveObject {
  setColor(_0: Color): void;
  unsetColor(): void;
  unsetWidth(): void;
  setLine(_0: HandleGeomLine): void;
  setPoints(_0: HandlePoint, _1: HandlePoint): void;
  setWidth(_0: number): void;
}

export interface AISShape extends InteractiveObject {
  shape(): Shape;
  setColor(_0: Color): void;
  unsetColor(): void;
  unsetTransparency(): void;
  unsetWidth(): void;
  setShape(_0: Shape): void;
  setTransparency(_0: number): void;
  setWidth(_0: number): void;
}

export interface InteractiveShape extends AISShape {
  getUUID(): string;
}

export interface ViewCube extends InteractiveObject {
  setViewAnimation(_0: HandleAnimationCamera): void;
  setFixedAnimationLoop(_0: boolean): void;
  setAutoStartAnimation(_0: boolean): void;
  setDrawEdges(_0: boolean): void;
  setDrawVertices(_0: boolean): void;
  setDrawAxes(_0: boolean): void;
  setYup(_0: boolean, _1: boolean): void;
  size(): number;
  setSize(_0: number, _1: boolean): void;
  setBoxFacetExtension(_0: number): void;
  setAxesPadding(_0: number): void;
  setFontHeight(_0: number): void;
}

export interface TextLabel extends InteractiveObject {
  setPosition(_0: Pnt): void;
  setFontAspect(_0: FontAspect): void;
  setColor(_0: Color): void;
  unsetTransparency(): void;
  setOrientation3D(_0: Ax2): void;
  unsetOrientation3D(): void;
  setHJustification(_0: HorizontalTextAlignment): void;
  setVJustification(_0: VerticalTextAlignment): void;
  setZoomable(_0: boolean): void;
  setOwnAnchorPoint(_0: boolean): void;
  acceptDisplayMode(_0: number): boolean;
  setHeight(_0: number): void;
  setAngle(_0: number): void;
  setTransparency(_0: number): void;
  setText(_0: EmbindString): void;
  fontName(): string;
  setFont(_0: EmbindString): void;
}

export interface AbstractTextLabel extends TextLabel {
  notifyOnDestruction(): void;
}

export interface PresentationManager extends Transient {
  structureManager(): HandleStructureManager;
  addToImmediateList(_0: HandleStructure): void;
  isImmediateModeOn(): boolean;
  display(_0: HandlePresentableObject, _1: number): void;
  erase(_0: HandlePresentableObject, _1: number): void;
}

export interface SensitiveEntity extends Transient {
}

export interface SensitiveSet extends SensitiveEntity {
}

export interface SensitivePrimitiveArray extends SensitiveSet {
  initTriangulation(_0: HandleGraphic3dBuffer, _1: HandleIndexBuffer, _2: Location, _3: boolean, _4: number): boolean;
  initPoints(_0: HandleGraphic3dBuffer, _1: HandleIndexBuffer, _2: Location, _3: boolean, _4: number): boolean;
}

export interface SensitiveGroup extends SensitiveSet {
  add(_0: HandleSensitiveEntity): void;
}

export interface SensitivePoint extends SensitiveEntity {
}

export interface SensitiveSegment extends SensitiveEntity {
}

export interface Selection extends Transient {
  add(_0: HandleSensitiveEntity): void;
}

export interface EntityOwner extends Transient {
  selectable(): HandleSelectableObject;
  setSelectable(_0: HandleSelectableObject): void;
  hasSelectable(): boolean;
  isSelected(): boolean;
  setSelected(_0: boolean): void;
  hilightWithColor(_0: HandlePresentationManager, _1: HandleDrawer, _2: number): void;
  unhilight(_0: HandlePresentationManager, _1: number): void;
  hilightWithColor(_0: HandlePresentationManager, _1: HandleDrawer, _2: number): void;
  unhilight(_0: HandlePresentationManager, _1: number): void;
  handleMouseClick(_0: Vec2I, _1: number, _2: number, _3: boolean): boolean;
}

export interface EntityOwnerExtend extends EntityOwner {
  notifyOnDestruction(): void;
}

export interface SelectMgrFilter extends Transient {
  isOk(_0: HandleEntityOwner): boolean;
  actsOn(_0: ShapeEnum): boolean;
}

export interface SelectMgrFilterWrapper extends SelectMgrFilter {
  isOk(_0: HandleEntityOwner): boolean;
  actsOn(_0: ShapeEnum): boolean;
}

export interface SelectionManager extends Transient {
}

export interface HandleTransient extends ClassHandle {
}

export interface BRepFont extends Transient {
  init(_0: EmbindString, _1: number, _2: number): boolean;
}

export interface HandleBRepFont extends ClassHandle {
  get(): BRepFont | null;
}

export interface BRepTextBuilder extends ClassHandle {
  perform(_0: BRepFont, _1: HandleTextFormatter, _2: Ax3): Shape;
  perform(_0: BRepFont, _1: NCollectionUtf8String, _2: Ax3, _3: HorizontalTextAlignment, _4: VerticalTextAlignment): Shape;
  render(_0: BRepFont, _1: EmbindString, _2: Ax3, _3: number): Shape;
}

export interface ShadedShape extends Prs3dRoot {
}

export interface ToolTriangulatedShape extends ClassHandle {
}

export interface VolumeValue<T extends number> {
  value: T;
}
export type Volume = VolumeValue<0>|VolumeValue<1>|VolumeValue<2>;

export interface WFShape extends ClassHandle {
}

export interface BRepSelectionTool extends ClassHandle {
}

export interface ViewerSelector3d extends ClassHandle {
  pick(_0: Array1OfPnt2d, _1: HandleView): void;
  allowOverlapDetection(_0: boolean): void;
  pick(_0: number, _1: number, _2: HandleView): void;
  pick(_0: number, _1: number, _2: number, _3: number, _4: HandleView): void;
  nbPicked(): number;
  picked(_0: number): HandleEntityOwner;
}

export interface HandleViewerSelector3d extends ClassHandle {
  get(): ViewerSelector3d | null;
}

export interface WireOrder extends ClassHandle {
  add(_0: XYZ, _1: XYZ): void;
  perform(_0: boolean): void;
  nbEdges(): number;
  ordered(_0: number): number;
}

export interface ShapeFix_Shape extends ClassHandle {
  shape(): Shape;
  perform(_0: ProgressRange): boolean;
}

export interface ShapeFix_ShapeTolerance extends ClassHandle {
  limitTolerance(_0: Shape, _1: number, _2: number, _3: ShapeEnum): boolean;
  setTolerance(_0: Shape, _1: number, _2: ShapeEnum): void;
}

export interface ShapeFix_Solid extends ClassHandle {
  solid(): Shape;
  perform(_0: ProgressRange): boolean;
}

export interface ShapeFix_Wire extends ClassHandle {
  wire(): Wire;
  setSurface(_0: HandleSurface): void;
  load(_0: Wire): void;
  perform(): boolean;
}

export interface UnifySameDomain extends Transient {
  shape(): Shape;
  build(): void;
  initialize(_0: Shape, _1: boolean, _2: boolean, _3: boolean): void;
}

export interface ExtendedString extends ClassHandle {
}

export interface AsciiString extends ClassHandle {
}

export interface Array1OfByte extends ClassHandle {
}

export interface HArray1OfByte extends ClassHandle {
  setValue(_0: number, _1: number): void;
}

export interface HandleHArray1OfByte extends ClassHandle {
  setValue(_0: number, _1: number): void;
  value(_0: number): number;
}

export interface IndexedDataMapOfStringString extends ClassHandle {
  seek(_0: EmbindString): any;
}

export interface ShapeEnumValue<T extends number> {
  value: T;
}
export type ShapeEnum = ShapeEnumValue<0>|ShapeEnumValue<1>|ShapeEnumValue<2>|ShapeEnumValue<3>|ShapeEnumValue<4>|ShapeEnumValue<5>|ShapeEnumValue<6>|ShapeEnumValue<7>|ShapeEnumValue<8>;

export interface TopAbsStateValue<T extends number> {
  value: T;
}
export type TopAbsState = TopAbsStateValue<0>|TopAbsStateValue<1>|TopAbsStateValue<2>|TopAbsStateValue<3>;

export interface Explorer extends ClassHandle {
  value(): Shape;
  current(): Shape;
  next(): void;
  clear(): void;
  more(): boolean;
}

export interface TopExp extends ClassHandle {
}

export interface Location extends ClassHandle {
}

export interface TopoDs extends ClassHandle {
}

export interface Shape extends ClassHandle {
  reversed(): Shape;
  orientation(): Orientation;
  shapeType(): ShapeEnum;
  setMirrorPnt(_0: Pnt): Shape;
  setMirrorAx1(_0: Ax1): Shape;
  setMirrorAx2(_0: Ax2): Shape;
  reverse(): void;
  orientation(_0: Orientation): void;
  isNull(): boolean;
  isEqual(_0: Shape): boolean;
  isNotEqual(_0: Shape): boolean;
  move(_0: Location, _1: boolean): void;
  moved(_0: Location, _1: boolean): Shape;
  located(_0: Location, _1: boolean): Shape;
  orientable(): boolean;
  orientable(_0: boolean): void;
  toString(): string;
}

export interface Compound extends Shape {
}

export interface CompSolid extends Shape {
}

export interface Edge extends Shape {
  turnEdgeToCircle(): HandleGeomCircle;
  turnEdgeToEllipse(): HandleGeomEllipse;
  curveType(): number;
  getPointOnEdge(_0: number): Pnt;
  getEdgeRange(): PointUV;
}

export interface Face extends Shape {
}

export interface Shell extends Shape {
}

export interface Solid extends Shape {
}

export interface Vertex extends Shape {
}

export interface Wire extends Shape {
}

export interface TopoDSBuilder extends ClassHandle {
  add(_0: Shape, _1: Shape): void;
  makeShell(_0: Shell): void;
  makeCompound(_0: Compound): void;
}

export interface Builder extends TopoDSBuilder {
}

export interface AmbientLight extends CLight {
}

export interface HandleAmbientLight extends ClassHandle {
  get(): AmbientLight | null;
}

export interface DirectionalLight extends CLight {
}

export interface HandleDirectionalLight extends ClassHandle {
  get(): DirectionalLight | null;
}

export interface HandlePositionalLight extends ClassHandle {
  get(): PositionalLight | null;
}

export interface PositionLight extends CLight {
}

export interface PositionalLight extends PositionLight {
}

export interface HandlePositionLight extends ClassHandle {
  get(): PositionLight | null;
}

export interface TypeOfOrientationValue<T extends number> {
  value: T;
}
export type TypeOfOrientation = TypeOfOrientationValue<24>|TypeOfOrientationValue<19>|TypeOfOrientationValue<4>|TypeOfOrientationValue<1>|TypeOfOrientationValue<2>|TypeOfOrientationValue<5>|TypeOfOrientationValue<3>|TypeOfOrientationValue<0>|TypeOfOrientationValue<6>|TypeOfOrientationValue<7>|TypeOfOrientationValue<8>;

export interface TypeOfViewValue<T extends number> {
  value: T;
}
export type TypeOfView = TypeOfViewValue<0>|TypeOfViewValue<1>;

export interface View extends ClassHandle {
  camera(): HandleCamera;
  renderingParams(): RenderingParams;
  setBackgroundColor(_0: Color): void;
  setWindow(_0: HandleWindow): void;
  mustBeResized(): void;
  invalidate(): void;
  redraw(): void;
  redrawImmediate(): void;
  setImmediateUpdate(_0: boolean): boolean;
  setProj(_0: TypeOfOrientation, _1: boolean): void;
  setBackgroundColor(_0: TypeOfColor, _1: number, _2: number, _3: number): void;
  setProj(_0: number, _1: number, _2: number): void;
}

export interface HandleView extends ClassHandle {
  get(): View | null;
  camera(): HandleCamera;
  renderingParams(): RenderingParams;
  ray(_0: Pnt2d): HandleGeomLine;
  setBackgroundColor(_0: Color): void;
  setWindow(_0: HandleWindow): void;
  setCamera(_0: HandleCamera): void;
  mustBeResized(): void;
  invalidate(): void;
  redraw(): void;
  redrawImmediate(): void;
  project(_0: Pnt, _1: Pnt2d): void;
  convert(_0: Pnt2d, _1: Pnt): void;
  statisticInformation(_0: IndexedDataMapOfStringString): void;
  setImmediateUpdate(_0: boolean): void;
  setProj(_0: TypeOfOrientation, _1: boolean): void;
  unproject(_0: Pnt2d, _1: HandlePlane, _2: Pnt): boolean;
  setBackgroundColor(_0: TypeOfColor, _1: number, _2: number, _3: number): void;
  setProj(_0: number, _1: number, _2: number): void;
  scale(): number;
}

export interface Viewer extends ClassHandle {
  createView(): HandleView;
  setDefaultShadingModel(_0: TypeOfShadingModel): void;
  setDefaultLights(): void;
  setLightOn(): void;
  setLightOn(_0: HandleCLight): void;
  SetLightOff(): void;
  SetLightOff(_0: HandleCLight): void;
  setDefaultRenderingParams(_0: RenderingParams): void;
  addLight(_0: HandleCLight): void;
  delLight(_0: HandleCLight): void;
  updateLights(): void;
  clearAllLights(): void;
  setComputedMode(_0: boolean): void;
}

export interface HandleViewer extends ClassHandle {
  get(): Viewer | null;
  setDefaultShadingModel(_0: TypeOfShadingModel): void;
  setDefaultLights(): void;
  setLightOn(): void;
  setComputedMode(_0: boolean): void;
}

export interface WasmWindow extends Window {
  setSizeBacking(_0: number, _1: number): void;
  setSizeLogical(_0: number, _1: number): void;
  setDevicePixelRatio(_0: number): void;
}

export interface CustomUtils extends ClassHandle {
}

export interface OffsetWire2 extends ClassHandle {
  getNewWire(): Wire;
  isDone(): boolean;
}

export interface VectorEdgeOffset extends ClassHandle {
  size(): number;
  get(_0: number): EdgeOffset | undefined;
  push_back(_0: EdgeOffset): void;
  resize(_0: number, _1: EdgeOffset): void;
  set(_0: number, _1: EdgeOffset): boolean;
}

export interface VectorResultWire extends ClassHandle {
  push_back(_0: resultWire): void;
  resize(_0: number, _1: resultWire): void;
  size(): number;
  get(_0: number): resultWire | undefined;
  set(_0: number, _1: resultWire): boolean;
}

export interface OffsetWire3 extends ClassHandle {
  getNewWire(): VectorResultWire;
  isDone(): boolean;
}

export type resultWire = {
  newEdge: Edge,
  isNewEdge: boolean,
  oldEdgeID: number
};

export type CurveUV = {
  first: number,
  last: number
};

export type UVBoundBox = {
  UMin: number,
  UMax: number,
  VMin: number,
  VMax: number
};

export type PointUV = {
  start: number,
  end: number
};

export type EdgeOffset = {
  newEdge: Edge,
  offset: number
};

interface EmbindModule {
  VectorUInt: {
    new(): VectorUInt;
  };
  VectorInt: {
    new(): VectorInt;
  };
  VectorFloat: {
    new(): VectorFloat;
  };
  VectorEdge: {
    new(): VectorEdge;
  };
  VectorPnt: {
    new(): VectorPnt;
  };
  VectorShape: {
    new(): VectorShape;
  };
  VectorVal: {
    new(): VectorVal;
  };
  Animation: {};
  AnimationCamera: {};
  HandleAnimationCamera: {
    new(_0: AnimationCamera | null): HandleAnimationCamera;
  };
  DisplayMode: {WireFrame: DisplayModeValue<0>, Shaded: DisplayModeValue<1>};
  InteractiveContext: {
    new(_0: HandleViewer): InteractiveContext;
  };
  InteractiveContextExtend: {
    new(_0: HandleViewer): InteractiveContextExtend;
  };
  HandleInteractiveContext: {
    new(_0: InteractiveContextExtend | null): HandleInteractiveContext;
  };
  HandleInteractiveObject: {
    new(_0: InteractiveObject | null): HandleInteractiveObject;
  };
  NavigationMode: {Orbit: NavigationModeValue<0>, FirstPersonFlight: NavigationModeValue<1>, FirstPersonWalk: NavigationModeValue<2>};
  HandleInteractivePoint: {
    new(_0: InteractivePoint | null): HandleInteractivePoint;
  };
  HandleInteractiveCircle: {
    new(_0: InteractiveCircle | null): HandleInteractiveCircle;
  };
  HandleMultipleConnectedInteractive: {
    new(_0: MultipleConnectedInteractive | null): HandleMultipleConnectedInteractive;
  };
  HandleInteractiveLine: {
    new(_0: InteractiveLine | null): HandleInteractiveLine;
  };
  HandleAISShape: {
    new(_0: AISShape | null): HandleAISShape;
    downCast(_0: HandleInteractiveObject): HandleAISShape;
  };
  RotationMode: {BndBoxActive: RotationModeValue<0>, PickLast: RotationModeValue<1>, PickCenter: RotationModeValue<2>, CameraAt: RotationModeValue<3>, BndBoxScene: RotationModeValue<4>};
  StatusOfDetection: {Error: StatusOfDetectionValue<0>, Nothing: StatusOfDetectionValue<1>, AllBad: StatusOfDetectionValue<2>, Selected: StatusOfDetectionValue<3>, OnlyOneDetected: StatusOfDetectionValue<4>, OnlyOneGood: StatusOfDetectionValue<5>, SeveralGood: StatusOfDetectionValue<6>};
  StatusOfPick: {Error: StatusOfPickValue<0>, NothingSelected: StatusOfPickValue<1>, Removed: StatusOfPickValue<2>, OneSelected: StatusOfPickValue<3>, SeveralSelected: StatusOfPickValue<4>};
  SelectionScheme: {UNKNOWN: SelectionSchemeValue<-1>, Replace: SelectionSchemeValue<0>, Add: SelectionSchemeValue<1>, Remove: SelectionSchemeValue<2>, XOR: SelectionSchemeValue<3>, Clear: SelectionSchemeValue<4>, ReplaceExtra: SelectionSchemeValue<5>};
  SelectionModesConcurrency: {Single: SelectionModesConcurrencyValue<0>, GlobalOrLocal: SelectionModesConcurrencyValue<1>, Multiple: SelectionModesConcurrencyValue<2>};
  HandleTextLabel: {
    new(_0: TextLabel | null): HandleTextLabel;
  };
  ParametrizationType: {ChordLength: ParametrizationTypeValue<0>, Centripetal: ParametrizationTypeValue<1>, IsoParametric: ParametrizationTypeValue<2>};
  DisplayConnection: {
    new(): DisplayConnection;
  };
  HandleDisplayConnection: {
    new(): HandleDisplayConnection;
    new(_0: DisplayConnection | null): HandleDisplayConnection;
  };
  ScrollDelta: {
    new(): ScrollDelta;
    new(_0: number, _1: number): ScrollDelta;
    new(_0: Vec2I, _1: number, _2: number): ScrollDelta;
  };
  TypeOfDisplayText: {NORMAL: TypeOfDisplayTextValue<0>, SUBTITLE: TypeOfDisplayTextValue<1>, DEKALE: TypeOfDisplayTextValue<2>, BLEND: TypeOfDisplayTextValue<4>, DIMENSION: TypeOfDisplayTextValue<4>, SHADOW: TypeOfDisplayTextValue<5>};
  TypeOfFacingModel: {BOTH_SIDE: TypeOfFacingModelValue<0>, BACK_SIDE: TypeOfFacingModelValue<1>, FRONT_SIDE: TypeOfFacingModelValue<2>};
  TypeOfLine: {EMPTY: TypeOfLineValue<-1>, SOLID: TypeOfLineValue<0>, DASH: TypeOfLineValue<1>, DOT: TypeOfLineValue<2>, DOTDASH: TypeOfLineValue<3>, USERDEFINED: TypeOfLineValue<4>};
  TypeOfMarker: {EMPTY: TypeOfMarkerValue<-1>, POINT: TypeOfMarkerValue<0>, PLUS: TypeOfMarkerValue<1>, STAR: TypeOfMarkerValue<2>, X: TypeOfMarkerValue<3>, O: TypeOfMarkerValue<4>, O_POINT: TypeOfMarkerValue<5>, O_PLUS: TypeOfMarkerValue<6>, O_STAR: TypeOfMarkerValue<7>, O_X: TypeOfMarkerValue<8>, RING1: TypeOfMarkerValue<9>, RING2: TypeOfMarkerValue<10>, RING3: TypeOfMarkerValue<11>, BALL: TypeOfMarkerValue<12>, USERDEFINED: TypeOfMarkerValue<13>};
  TypeOfStyleText: {NORMAL: TypeOfStyleTextValue<0>, ANNOTATION: TypeOfStyleTextValue<1>};
  TypeOfTriedronPosition: {CENTER: TypeOfTriedronPositionValue<0>, TOP: TypeOfTriedronPositionValue<1>, BOTTOM: TypeOfTriedronPositionValue<2>, LEFT: TypeOfTriedronPositionValue<4>, RIGHT: TypeOfTriedronPositionValue<8>, LEFT_LOWER: TypeOfTriedronPositionValue<6>, LEFT_UPPER: TypeOfTriedronPositionValue<5>, RIGHT_LOWER: TypeOfTriedronPositionValue<10>, RIGHT_UPPER: TypeOfTriedronPositionValue<9>};
  Window: {};
  HandleWindow: {
    new(_0: Window | null): HandleWindow;
  };
  WindowInputListener: {};
  ViewController: {
    new(): ViewController;
  };
  ViewControllerWrapper: {
    new(): ViewControllerWrapper;
  };
  TypeOfHighlightMethod: {COLOR: TypeOfHighlightMethodValue<0>, BOUNDBOX: TypeOfHighlightMethodValue<1>};
  InteriorStyle: {EMPTY: InteriorStyleValue<-1>, SOLID: InteriorStyleValue<0>, HATCH: InteriorStyleValue<1>, HIDDENLINE: InteriorStyleValue<2>, POINT: InteriorStyleValue<3>, HOLLOW: InteriorStyleValue<-1>};
  Box: {
    new(): Box;
    new(_0: Pnt, _1: Pnt): Box;
  };
  BOPAlgo_Options: {
    new(): BOPAlgo_Options;
    new(_0: HandleNCollectionBaseAllocator): BOPAlgo_Options;
  };
  BOPAlgo_Algo: {};
  BOPAlgo_BuilderShape: {};
  BOPAlgo_Builder: {
    new(): BOPAlgo_Builder;
  };
  BOPAlgoOperation: {common: BOPAlgoOperationValue<0>, fuse: BOPAlgoOperationValue<1>, cut: BOPAlgoOperationValue<2>, cut21: BOPAlgoOperationValue<3>, section: BOPAlgoOperationValue<4>, unknown: BOPAlgoOperationValue<5>};
  BOPAlgo_ToolsProvider: {
    new(): BOPAlgo_ToolsProvider;
  };
  Splitter: {
    new(): Splitter;
    new(_0: HandleNCollectionBaseAllocator): Splitter;
  };
  Tool: {
    surface(_0: Face): HandleSurface;
    pnt(_0: Vertex): Pnt;
    isClosed(_0: Shape): boolean;
    curve(_0: Edge, _1: CurveUV): HandleCurve;
  };
  BRepAdaptor_Curve: {
    new(): BRepAdaptor_Curve;
    new(_0: Edge): BRepAdaptor_Curve;
  };
  BRepAdaptor_Surface: {
    new(): BRepAdaptor_Surface;
    new(_0: Face, _1: boolean): BRepAdaptor_Surface;
  };
  Algo: {};
  BuilderAlgo: {
    new(): BuilderAlgo;
  };
  BooleanOperation: {};
  Check: {
    new(): Check;
    new(_0: Shape, _1: boolean, _2: boolean, _3: ProgressRange): Check;
    new(_0: Shape, _1: Shape, _2: BOPAlgoOperation, _3: boolean, _4: boolean, _5: ProgressRange): Check;
  };
  Cut: {
    new(): Cut;
    new(_0: Shape, _1: Shape, _2: ProgressRange): Cut;
  };
  Fuse: {
    new(): Fuse;
    new(_0: Shape, _1: Shape, _2: ProgressRange): Fuse;
  };
  Common: {
    new(): Common;
    new(_0: Shape, _1: Shape, _2: ProgressRange): Common;
  };
  Section: {
    new(_0: Shape, _1: Shape, _2: boolean): Section;
    getPlnInstance(_0: Shape, _1: Pln, _2: boolean): Section;
  };
  BrepBndLib: {
    add(_0: Shape, _1: Box, _2: boolean): void;
  };
  Command: {};
  MakeShape: {};
  MakeWire: {
    new(): MakeWire;
  };
  MakePolygon: {
    new(): MakePolygon;
  };
  MakeEdge: {
    new(): MakeEdge;
    new(_0: Lin): MakeEdge;
    new(_0: Pnt, _1: Pnt): MakeEdge;
    getHandleCurveInstance(_0: HandleCurve): MakeEdge;
    getCircInstance(_0: Circ): MakeEdge;
    getElipsInstance(_0: Elips): MakeEdge;
    getCircPntInstance(_0: Circ, _1: Pnt, _2: Pnt): MakeEdge;
    getHandleCurvePntInstance(_0: HandleCurve, _1: Pnt, _2: Pnt): MakeEdge;
    getElipsNumberInstance(_0: Elips, _1: number, _2: number): MakeEdge;
  };
  MakeFace: {
    new(): MakeFace;
    new(_0: Face): MakeFace;
    new(_0: Wire, _1: boolean): MakeFace;
    new(_0: HandleSurface, _1: Wire, _2: boolean): MakeFace;
    getPlnInstance(_0: Pln): MakeFace;
    createSurface(_0: HandleSurface, _1: number): MakeFace;
  };
  ModifyShape: {};
  Transform: {
    new(_0: Trsf): Transform;
    new(_0: Shape, _1: Trsf, _2: boolean, _3: boolean): Transform;
  };
  GTransform: {
    new(_0: GTrsf): GTransform;
    new(_0: Shape, _1: GTrsf, _2: boolean): GTransform;
  };
  FaceError: {FaceDone: FaceErrorValue<0>, NoFace: FaceErrorValue<1>, NotPlanar: FaceErrorValue<2>, CurveProjectionFailed: FaceErrorValue<3>, ParametersOutOfRange: FaceErrorValue<4>};
  MakeSolid: {
    new(): MakeSolid;
    new(_0: Shell): MakeSolid;
  };
  MakeEdge2d: {
    new(_0: Pnt2d, _1: Pnt2d): MakeEdge2d;
    new(_0: Lin2d): MakeEdge2d;
    getHandleCurveInstance(_0: HandleCurve2D): MakeEdge2d;
    getElipsInstance(_0: Elips2d): MakeEdge2d;
    getHandleCurvePntInstance(_0: HandleCurve2D, _1: Pnt2d, _2: Pnt2d): MakeEdge2d;
    getCircInstance(_0: Circ2d): MakeEdge2d;
    getCircPntInstance(_0: Circ2d, _1: Pnt2d, _2: Pnt2d): MakeEdge2d;
    getElipsNumberInstance(_0: Elips2d, _1: number, _2: number): MakeEdge2d;
  };
  MakeVertex: {
    new(_0: Pnt): MakeVertex;
  };
  TransitionMode: {Transformed: TransitionModeValue<0>, RightCorner: TransitionModeValue<1>, RoundCorner: TransitionModeValue<2>};
  Analyzer: {
    new(_0: Shape, _1: boolean, _2: boolean, _3: boolean): Analyzer;
  };
  SClassifier: {
    new(): SClassifier;
    new(_0: SolidExplorer, _1: Pnt, _2: number): SClassifier;
  };
  SolidClassifier: {
    new(): SolidClassifier;
    new(_0: Shape): SolidClassifier;
    new(_0: Shape, _1: Pnt, _2: number): SolidClassifier;
  };
  SolidExplorer: {
    new(): SolidExplorer;
    new(_0: Shape): SolidExplorer;
  };
  ExtCC: {
    new(_0: Edge, _1: Edge): ExtCC;
  };
  DistShapeShape: {
    new(_0: Shape, _1: Shape, _2: ExtFlag, _3: ExtAlgo, _4: ProgressRange): DistShapeShape;
    new(_0: Shape, _1: Shape, _2: number, _3: ExtFlag, _4: ExtAlgo, _5: ProgressRange): DistShapeShape;
  };
  SplitShape: {
    new(): SplitShape;
    new(_0: Shape): SplitShape;
  };
  Filling: {
    face(_0: Edge, _1: Edge): Face;
  };
  BrepFill: {};
  TypeOfContact: {NoContact: TypeOfContactValue<0>, Contact: TypeOfContactValue<1>, ContactOnBorder: TypeOfContactValue<2>};
  LocalOperation: {};
  MakeFillet: {
    new(_0: Shape, _1: FilletShape): MakeFillet;
  };
  BrepGProp: {
    new(): BrepGProp;
    volumeProperties(_0: Shape, _1: GProps, _2: boolean, _3: boolean, _4: boolean): void;
    surfaceProperties(_0: Shape, _1: GProps, _2: boolean, _3: boolean): void;
    linearProperties(_0: Shape, _1: GProps, _2: boolean, _3: boolean): void;
  };
  BRepLib: {
    orientClosedSolid(_0: Solid): boolean;
    buildCurve3d(_0: Edge, _1: number, _2: GeomAbsShape, _3: number, _4: number): boolean;
  };
  ThruSections: {
    new(_0: boolean, _1: boolean, _2: number): ThruSections;
  };
  MakeOffset: {
    new(): MakeOffset;
    new(_0: Wire, _1: JoinType, _2: boolean): MakeOffset;
    getFaceInstance(_0: Face, _1: JoinType, _2: boolean): MakeOffset;
    convertFace(_0: Face, _1: number): Face;
  };
  MakeBox: {
    new(): MakeBox;
    new(_0: Pnt, _1: Pnt): MakeBox;
    new(_0: number, _1: number, _2: number): MakeBox;
  };
  MakeSweep: {};
  MakePipe: {
    new(_0: Wire, _1: Shape): MakePipe;
    new(_0: Wire, _1: Shape, _2: Trihedron, _3: boolean): MakePipe;
  };
  MakePipeShell: {
    new(_0: Wire): MakePipeShell;
  };
  MakePrism: {
    new(_0: Shape, _1: Vec, _2: boolean, _3: boolean): MakePrism;
    new(_0: Shape, _1: Dir, _2: boolean, _3: boolean, _4: boolean): MakePrism;
  };
  MakeOneAxis: {};
  MakeCylinder: {
    new(_0: Ax2, _1: number, _2: number, _3: number): MakeCylinder;
    new(_0: Ax2, _1: number, _2: number): MakeCylinder;
  };
  MakeSphere: {
    new(_0: Pnt, _1: number): MakeSphere;
    new(_0: Pnt, _1: number, _2: number): MakeSphere;
  };
  MakeCone: {
    new(_0: Ax2, _1: number, _2: number, _3: number): MakeCone;
    new(_0: Ax2, _1: number, _2: number, _3: number, _4: number): MakeCone;
  };
  MakeRevol: {
    new(_0: Shape, _1: Ax1, _2: boolean): MakeRevol;
    new(_0: Shape, _1: Ax1, _2: number, _3: boolean): MakeRevol;
  };
  BRepProj_Projection: {
    new(_0: Shape, _1: Shape, _2: Dir): BRepProj_Projection;
    getProjectionInstance(_0: Shape, _1: Shape, _2: Pnt): BRepProj_Projection;
  };
  Revol: {
    new(_0: Shape, _1: Ax1, _2: boolean): Revol;
    new(_0: Shape, _1: Ax1, _2: number, _3: boolean): Revol;
  };
  FClass2d: {
    new(_0: Face, _1: number): FClass2d;
  };
  BrepTools: {
    outerWire(_0: Face): Wire;
    UVBounds(_0: Face): UVBoundBox;
  };
  BRepTools_WireExplorer: {
    new(): BRepTools_WireExplorer;
    new(_0: Wire): BRepTools_WireExplorer;
    new(_0: Wire, _1: Face): BRepTools_WireExplorer;
  };
  FilletShape: {Rational: FilletShapeValue<0>, QuasiAngular: FilletShapeValue<1>, Polynomial: FilletShapeValue<2>};
  ExtAlgo: {Grad: ExtAlgoValue<0>, Tree: ExtAlgoValue<1>};
  ExtFlag: {MIN: ExtFlagValue<0>, MAX: ExtFlagValue<1>, MINMAX: ExtFlagValue<2>};
  FontAspect: {UNDEFINED: FontAspectValue<-1>, Regular: FontAspectValue<0>, Bold: FontAspectValue<1>, Italic: FontAspectValue<2>, BoldItalic: FontAspectValue<3>};
  HandleTextFormatter: {
    new(): HandleTextFormatter;
    new(_0: TextFormatter | null): HandleTextFormatter;
  };
  HandleFontMgr: {
    new(_0: FontMgr | null): HandleFontMgr;
  };
  HandleSystemFont: {
    new(_0: SystemFont | null): HandleSystemFont;
  };
  FontHinting: {Off: FontHintingValue<0>, Normal: FontHintingValue<1>, Light: FontHintingValue<2>, ForceAutohint: FontHintingValue<16>, NoAutohint: FontHintingValue<32>};
  Root: {};
  MakeArcOfCircle: {
    new(_0: Pnt, _1: Pnt, _2: Pnt): MakeArcOfCircle;
    new(_0: Circ, _1: Pnt, _2: Pnt, _3: boolean): MakeArcOfCircle;
  };
  MakeCircle: {
    new(_0: Circ): MakeCircle;
    new(_0: Pnt, _1: Pnt, _2: Pnt): MakeCircle;
    new(_0: Ax2, _1: number): MakeCircle;
  };
  MakeEllipse: {
    new(_0: Elips): MakeEllipse;
    new(_0: Ax2, _1: number, _2: number): MakeEllipse;
  };
  ErrorType: {Done: ErrorTypeValue<0>, ConfusedPoints: ErrorTypeValue<1>, NegativeRadius: ErrorTypeValue<2>, CUT21: ErrorTypeValue<3>, ColinearPoints: ErrorTypeValue<4>, NullAxis: ErrorTypeValue<5>, NullAngle: ErrorTypeValue<6>, NullRadius: ErrorTypeValue<7>, InvertAxis: ErrorTypeValue<8>, BadAngle: ErrorTypeValue<9>, InvertRadius: ErrorTypeValue<10>, NullFocusLength: ErrorTypeValue<11>, NullVector: ErrorTypeValue<12>, BadEquation: ErrorTypeValue<13>};
  GCE2dRoot: {};
  GCE2dMakeSegment: {};
  HandleCartesianPoint: {
    new(_0: CartesianPoint | null): HandleCartesianPoint;
  };
  HandlePoint: {
    new(_0: Point | null): HandlePoint;
  };
  HandleGeomCircle: {
    new(_0: Circle | null): HandleGeomCircle;
  };
  HandleCurve: {
    new(_0: Curve | null): HandleCurve;
  };
  HandleGeomEllipse: {
    new(_0: Ellipse | null): HandleGeomEllipse;
  };
  HandleGeometry: {
    new(_0: Geometry | null): HandleGeometry;
  };
  HandleSurface: {
    new(_0: Surface | null): HandleSurface;
  };
  HandleTrimmedCurve: {
    new(_0: TrimmedCurve | null): HandleTrimmedCurve;
  };
  HandleGeomLine: {
    new(_0: Line | null): HandleGeomLine;
  };
  HandlePlane: {
    new(_0: Plane | null): HandlePlane;
  };
  HandleGeomConicalSurface: {
    new(_0: ConicalSurface | null): HandleGeomConicalSurface;
  };
  HandleBoundedSurface: {
    new(_0: BoundedSurface | null): HandleBoundedSurface;
  };
  HandleRectangularTrimmedSurface: {
    new(_0: RectangularTrimmedSurface | null): HandleRectangularTrimmedSurface;
  };
  HandleBSplineCurve: {
    new(_0: BSplineCurve | null): HandleBSplineCurve;
  };
  HandleCircle2D: {
    new(_0: Circle2D | null): HandleCircle2D;
  };
  HandleConic2D: {
    new(_0: Conic2D | null): HandleConic2D;
  };
  HandleCurve2D: {
    new(_0: Curve2D | null): HandleCurve2D;
  };
  HandleGeometry2D: {
    new(_0: Geometry2D | null): HandleGeometry2D;
  };
  HandleLine2D: {
    new(_0: Line2D | null): HandleLine2D;
  };
  CurveType: {Line: CurveTypeValue<0>, Circle: CurveTypeValue<1>, Ellipse: CurveTypeValue<2>, Hyperbola: CurveTypeValue<3>, Parabola: CurveTypeValue<4>, BezierCurve: CurveTypeValue<5>, BSplineCurve: CurveTypeValue<6>, OffsetCurve: CurveTypeValue<7>, OtherCurve: CurveTypeValue<8>};
  GeomAbsShape: {C0: GeomAbsShapeValue<0>, G1: GeomAbsShapeValue<1>, C1: GeomAbsShapeValue<2>, G2: GeomAbsShapeValue<3>, C2: GeomAbsShapeValue<4>, C3: GeomAbsShapeValue<5>, CN: GeomAbsShapeValue<6>};
  JoinType: {Arc: JoinTypeValue<0>, Tangent: JoinTypeValue<1>, Intersection: JoinTypeValue<2>};
  SurfaceType: {Plane: SurfaceTypeValue<0>, Cylinder: SurfaceTypeValue<1>, Cone: SurfaceTypeValue<2>, Sphere: SurfaceTypeValue<3>, Torus: SurfaceTypeValue<4>, BezierSurface: SurfaceTypeValue<5>, BSplineSurface: SurfaceTypeValue<6>, SurfaceOfRevolution: SurfaceTypeValue<7>, SurfaceOfExtrusion: SurfaceTypeValue<8>, OffsetSurface: SurfaceTypeValue<9>, OtherSurface: SurfaceTypeValue<10>};
  Orientation: {FORWARD: OrientationValue<0>, REVERSED: OrientationValue<1>, INTERNAL: OrientationValue<2>, EXTERNAL: OrientationValue<3>};
  IntCS: {
    new(): IntCS;
    new(_0: HandleCurve, _1: HandleSurface): IntCS;
  };
  IntSS: {
    new(): IntSS;
    new(_0: HandleSurface, _1: HandleSurface, _2: number): IntSS;
  };
  ProjectPointOnSurf: {
    new(_0: Pnt, _1: HandleSurface, _2: ExtAlgo): ProjectPointOnSurf;
  };
  PointsToBSpline: {
    getInstance(_0: VectorPnt): PointsToBSpline;
  };
  Trihedron: {IsCorrectedFrenet: TrihedronValue<0>, IsFixed: TrihedronValue<1>, IsFrenet: TrihedronValue<2>, IsConstantNormal: TrihedronValue<3>, IsDarboux: TrihedronValue<4>, IsGuideAC: TrihedronValue<5>, IsGuidePlan: TrihedronValue<6>, IsGuideACWithContact: TrihedronValue<7>, IsGuidePlanWithContact: TrihedronValue<8>, IsDiscreteTrihedron: TrihedronValue<9>};
  Ax1: {
    new(): Ax1;
    new(_0: Pnt, _1: Dir): Ax1;
  };
  Ax2: {
    new(): Ax2;
    new(_0: Pnt, _1: Dir, _2: Dir): Ax2;
    new(_0: Pnt, _1: Dir): Ax2;
  };
  Ax2d: {
    new(): Ax2d;
    new(_0: Pnt2d, _1: Dir2d): Ax2d;
  };
  Ax3: {
    new(): Ax3;
    new(_0: Ax2): Ax3;
    new(_0: Pnt, _1: Dir, _2: Dir): Ax3;
    new(_0: Pnt, _1: Dir): Ax3;
  };
  Circ: {
    new(): Circ;
    new(_0: Ax2, _1: number): Circ;
  };
  Cone: {
    new(): Cone;
  };
  Cylinder: {
    new(): Cylinder;
  };
  Dir: {
    new(): Dir;
    new(_0: Vec): Dir;
    new(_0: number, _1: number, _2: number): Dir;
  };
  Dir2d: {
    new(): Dir2d;
    new(_0: Vec2d): Dir2d;
    new(_0: number, _1: number): Dir2d;
  };
  Elips: {
    new(): Elips;
  };
  Elips2d: {
    new(): Elips2d;
  };
  EulerSequence: {EulerAngles: EulerSequenceValue<0>, YawPitchRoll: EulerSequenceValue<1>, Extrinsic_XYZ: EulerSequenceValue<2>, Extrinsic_XZY: EulerSequenceValue<3>, Extrinsic_YXZ: EulerSequenceValue<5>, Extrinsic_ZXY: EulerSequenceValue<6>, Extrinsic_ZYX: EulerSequenceValue<7>, Intrinsic_XYZ: EulerSequenceValue<8>, Intrinsic_XZY: EulerSequenceValue<9>, Intrinsic_YZX: EulerSequenceValue<10>, Intrinsic_YXZ: EulerSequenceValue<11>, Intrinsic_ZXY: EulerSequenceValue<12>, Intrinsic_ZYX: EulerSequenceValue<13>, Extrinsic_XYX: EulerSequenceValue<14>, Extrinsic_XZX: EulerSequenceValue<15>, Extrinsic_YZY: EulerSequenceValue<16>, Extrinsic_YXY: EulerSequenceValue<17>, Extrinsic_ZYZ: EulerSequenceValue<18>, Extrinsic_ZXZ: EulerSequenceValue<19>, Intrinsic_XYX: EulerSequenceValue<20>, Intrinsic_XZX: EulerSequenceValue<21>, Intrinsic_YZY: EulerSequenceValue<22>, Intrinsic_YXY: EulerSequenceValue<23>, Intrinsic_ZXZ: EulerSequenceValue<24>, Intrinsic_ZYZ: EulerSequenceValue<25>};
  GTrsf: {
    new(): GTrsf;
    new(_0: Trsf): GTrsf;
    new(_0: Mat, _1: XYZ): GTrsf;
  };
  Lin: {
    new(): Lin;
    new(_0: Ax1): Lin;
    new(_0: Pnt, _1: Dir): Lin;
  };
  Mat: {
    new(): Mat;
    new(_0: XYZ, _1: XYZ, _2: XYZ): Mat;
    new(_0: number, _1: number, _2: number, _3: number, _4: number, _5: number, _6: number, _7: number, _8: number): Mat;
  };
  Mat2d: {
    new(): Mat2d;
    new(_0: XY, _1: XY): Mat2d;
  };
  Pln: {
    new(): Pln;
    new(_0: Ax3): Pln;
    new(_0: Pnt, _1: Dir): Pln;
    new(_0: number, _1: number, _2: number, _3: number): Pln;
  };
  Pnt: {
    new(): Pnt;
    new(_0: XYZ): Pnt;
    new(_0: number, _1: number, _2: number): Pnt;
  };
  Pnt2d: {
    new(): Pnt2d;
    new(_0: XY): Pnt2d;
    new(_0: number, _1: number): Pnt2d;
  };
  Quaternion: {
    new(): Quaternion;
    new(_0: Mat): Quaternion;
    new(_0: Vec, _1: Vec, _2: Vec): Quaternion;
    new(_0: number, _1: number, _2: number, _3: number): Quaternion;
    new(_0: Vec, _1: number): Quaternion;
  };
  QuaternionNLerp: {
    new(): QuaternionNLerp;
    new(_0: Quaternion, _1: Quaternion): QuaternionNLerp;
    interpolate(_0: Quaternion, _1: Quaternion, _2: number): Quaternion;
  };
  QuaternionSLerp: {
    new(): QuaternionSLerp;
    new(_0: Quaternion, _1: Quaternion): QuaternionSLerp;
    interpolate(_0: Quaternion, _1: Quaternion, _2: number): Quaternion;
  };
  Sphere: {};
  Torus: {};
  Trsf: {
    new(): Trsf;
    new(_0: Trsf2d): Trsf;
  };
  Trsf2d: {
    new(): Trsf2d;
    new(_0: Trsf): Trsf2d;
  };
  TrsfForm: {Identity: TrsfFormValue<0>, Rotation: TrsfFormValue<1>, Translation: TrsfFormValue<2>, PntMirror: TrsfFormValue<3>, Ax1Mirror: TrsfFormValue<4>, Ax2Mirror: TrsfFormValue<5>, Scale: TrsfFormValue<6>, CompoundTrsf: TrsfFormValue<7>, Other: TrsfFormValue<8>};
  Vec: {
    new(): Vec;
    new(_0: Dir): Vec;
    new(_0: Pnt, _1: Pnt): Vec;
    new(_0: number, _1: number, _2: number): Vec;
  };
  Vec2d: {
    new(): Vec2d;
    new(_0: Dir2d): Vec2d;
    new(_0: number, _1: number): Vec2d;
  };
  Vec2f: {
    new(): Vec2f;
    new(_0: number): Vec2f;
    new(_0: number, _1: number): Vec2f;
  };
  Vec3f: {
    new(): Vec3f;
    new(_0: number): Vec3f;
    new(_0: number, _1: number, _2: number): Vec3f;
  };
  XY: {
    new(): XY;
    new(_0: number, _1: number): XY;
  };
  XYZ: {
    new(): XYZ;
    new(_0: number, _1: number, _2: number): XYZ;
  };
  Circ2d: {
    new(): Circ2d;
    new(_0: Ax2d, _1: number, _2: boolean): Circ2d;
    new(_0: Ax22d, _1: number): Circ2d;
  };
  Lin2d: {
    new(): Lin2d;
    new(_0: Ax2d): Lin2d;
    new(_0: Pnt2d, _1: Dir2d): Lin2d;
  };
  Ax22d: {
    new(): Ax22d;
    new(_0: Pnt2d, _1: Dir2d, _2: Dir2d): Ax22d;
    new(_0: Ax2d, _1: boolean): Ax22d;
  };
  GProps: {
    new(): GProps;
  };
  AlphaMode: {Opaque: AlphaModeValue<0>, Mask: AlphaModeValue<1>, Blend: AlphaModeValue<2>, MaskBlend: AlphaModeValue<3>, BlendAuto: AlphaModeValue<-1>};
  HandleAspectLine3d: {
    new(_0: AspectLine3d | null): HandleAspectLine3d;
  };
  HandleAspectMarker3d: {
    new(_0: AspectMarker3d | null): HandleAspectMarker3d;
  };
  HandleAspects: {
    new(_0: Aspects | null): HandleAspects;
  };
  HandleAspectText3d: {
    new(_0: AspectText3d | null): HandleAspectText3d;
  };
  Projection: {Orthographic: ProjectionValue<0>, Perspective: ProjectionValue<1>, Stereo: ProjectionValue<2>, MonoLeftEye: ProjectionValue<3>, MonoRightEye: ProjectionValue<4>};
  HandleCamera: {};
  GraphicDriver: {};
  HandleGraphicDriver: {
    new(_0: GraphicDriver | null): HandleGraphicDriver;
  };
  HorizontalTextAlignment: {LEFT: HorizontalTextAlignmentValue<0>, CENTER: HorizontalTextAlignmentValue<1>, RIGHT: HorizontalTextAlignmentValue<2>};
  HandleIndexBuffer: {
    new(_0: IndexBuffer | null): HandleIndexBuffer;
  };
  MarkerImage: {};
  RenderingParams: {
    new(): RenderingParams;
  };
  PerfCounters: {NONE: PerfCountersValue<0>, FrameRate: PerfCountersValue<1>, CPU: PerfCountersValue<2>, Layers: PerfCountersValue<4>, Structures: PerfCountersValue<8>, Groups: PerfCountersValue<16>, GroupArrays: PerfCountersValue<32>, Triangles: PerfCountersValue<64>, Points: PerfCountersValue<128>, Lines: PerfCountersValue<256>, EstimMem: PerfCountersValue<512>, FrameTime: PerfCountersValue<1024>, FrameTimeMax: PerfCountersValue<2048>, SkipImmediate: PerfCountersValue<4096>, Basic: PerfCountersValue<15>, Extended: PerfCountersValue<1023>, All: PerfCountersValue<4095>};
  TextPath: {UP: TextPathValue<0>, DOWN: TextPathValue<1>, LEFT: TextPathValue<2>, RIGHT: TextPathValue<3>};
  TransformPers: {
    new(_0: TransModeFlags): TransformPers;
    new(_0: TransModeFlags, _1: Pnt): TransformPers;
    new(_0: TransModeFlags, _1: TypeOfTriedronPosition, _2: Vec2I): TransformPers;
  };
  HandleTransformPers: {
    new(_0: TransformPers | null): HandleTransformPers;
  };
  TransModeFlags: {None: TransModeFlagsValue<0>, ZoomPers: TransModeFlagsValue<2>, RotatePers: TransModeFlagsValue<8>, TriedronPers: TransModeFlagsValue<32>, d2: TransModeFlagsValue<64>, CameraPers: TransModeFlagsValue<128>, ZoomRotatePers: TransModeFlagsValue<10>};
  TypeOfShadingModel: {Default: TypeOfShadingModelValue<-1>, Unlit: TypeOfShadingModelValue<0>, PhongFacet: TypeOfShadingModelValue<1>, Gouraud: TypeOfShadingModelValue<2>, Phong: TypeOfShadingModelValue<3>, Pbr: TypeOfShadingModelValue<4>, PbrFacet: TypeOfShadingModelValue<5>};
  Vec2I: {
    new(): Vec2I;
    new(_0: number, _1: number): Vec2I;
  };
  Vec2D: {
    new(): Vec2D;
    new(_0: number, _1: number): Vec2D;
  };
  Vec4: {
    new(_0: number, _1: number, _2: number, _3: number): Vec4;
  };
  VerticalTextAlignment: {BOTTOM: VerticalTextAlignmentValue<0>, CENTER: VerticalTextAlignmentValue<1>, TOP: VerticalTextAlignmentValue<2>, TOPFIRSTLINE: VerticalTextAlignmentValue<3>};
  HandleStructure: {
    new(_0: Structure | null): HandleStructure;
  };
  HandleStructureManager: {
    new(_0: StructureManager | null): HandleStructureManager;
  };
  DisplayPriority: {INVALID: DisplayPriorityValue<-1>, Bottom: DisplayPriorityValue<0>, AlmostBottom: DisplayPriorityValue<1>, Below2: DisplayPriorityValue<2>, Below1: DisplayPriorityValue<3>, Below: DisplayPriorityValue<4>, Normal: DisplayPriorityValue<5>, Above: DisplayPriorityValue<6>, Above1: DisplayPriorityValue<7>, Above2: DisplayPriorityValue<8>, Highlight: DisplayPriorityValue<9>, Topmost: DisplayPriorityValue<10>};
  HandlePresentationAttributes: {
    new(_0: PresentationAttributes | null): HandlePresentationAttributes;
  };
  HandleSequenceOfHClipPlane: {
    new(_0: SequenceOfHClipPlane | null): HandleSequenceOfHClipPlane;
  };
  TypeOfStructure: {WIREFRAME: TypeOfStructureValue<0>, SHADING: TypeOfStructureValue<1>, COMPUTED: TypeOfStructureValue<2>, ALL: TypeOfStructureValue<3>};
  HandleGroup: {
    new(_0: Group | null): HandleGroup;
  };
  HandleAspectFillArea3d: {
    new(_0: AspectFillArea3d | null): HandleAspectFillArea3d;
  };
  MaterialAspect: {
    new(): MaterialAspect;
    new(_0: NameOfMaterial): MaterialAspect;
  };
  HandleArrayOfPrimitives: {
    new(_0: ArrayOfPrimitives | null): HandleArrayOfPrimitives;
  };
  HandleArrayOfTriangles: {
    new(_0: ArrayOfTriangles | null): HandleArrayOfTriangles;
  };
  TypeOfPrimitiveArray: {UNDEFINED: TypeOfPrimitiveArrayValue<0>, POINTS: TypeOfPrimitiveArrayValue<1>, SEGMENTS: TypeOfPrimitiveArrayValue<2>, POLYLINES: TypeOfPrimitiveArrayValue<3>, TRIANGLES: TypeOfPrimitiveArrayValue<4>, TRIANGLESTRIPS: TypeOfPrimitiveArrayValue<5>, TRIANGLEFANS: TypeOfPrimitiveArrayValue<6>, LINES_ADJACENCY: TypeOfPrimitiveArrayValue<7>, LINE_STRIP_ADJACENCY: TypeOfPrimitiveArrayValue<8>, TRIANGLES_ADJACENCY: TypeOfPrimitiveArrayValue<9>, TRIANGLE_STRIP_ADJACENCY: TypeOfPrimitiveArrayValue<10>, QUADRANGLES: TypeOfPrimitiveArrayValue<11>, QUADRANGLESTRIPS: TypeOfPrimitiveArrayValue<12>, POLYGONS: TypeOfPrimitiveArrayValue<13>};
  TypeOfAttribute: {POS: TypeOfAttributeValue<0>, NORM: TypeOfAttributeValue<1>, UV: TypeOfAttributeValue<2>, COLOR: TypeOfAttributeValue<3>, CUSTOM: TypeOfAttributeValue<4>};
  TypeOfData: {USHORT: TypeOfDataValue<0>, UINT: TypeOfDataValue<1>, VEC2: TypeOfDataValue<2>, VEC3: TypeOfDataValue<3>, VEC4: TypeOfDataValue<4>, VEC4UB: TypeOfDataValue<5>, FLOAT: TypeOfDataValue<6>};
  Attribute: {};
  Array1OfAttribute: {};
  HandleGraphic3dBuffer: {
    new(_0: Graphic3dBuffer | null): HandleGraphic3dBuffer;
  };
  HandleArrayOfSegments: {
    new(_0: ArrayOfSegments | null): HandleArrayOfSegments;
  };
  Handle_Graphic3d_Text: {
    new(_0: Graphic3d_Text | null): Handle_Graphic3d_Text;
  };
  RenderingMode: {RASTERIZATION: RenderingModeValue<0>, RAYTRACING: RenderingModeValue<1>};
  RenderTransparentMethod: {BLEND_UNORDERED: RenderTransparentMethodValue<0>, BLEND_OIT: RenderTransparentMethodValue<1>, DEPTH_PEELING_OIT: RenderTransparentMethodValue<2>};
  ToneMappingMethod: {Disabled: ToneMappingMethodValue<0>, Filmic: ToneMappingMethodValue<1>};
  StereoMode: {QuadBuffer: StereoModeValue<0>, Anaglyph: StereoModeValue<1>, RowInterlaced: StereoModeValue<2>, ColumnInterlaced: StereoModeValue<3>, ChessBoard: StereoModeValue<4>, SideBySide: StereoModeValue<5>, OverUnder: StereoModeValue<6>, SoftPageFlip: StereoModeValue<7>, OpenVR: StereoModeValue<8>};
  TypeOfLightSource: {Ambient: TypeOfLightSourceValue<0>, Directional: TypeOfLightSourceValue<1>, Positional: TypeOfLightSourceValue<2>, Spot: TypeOfLightSourceValue<3>};
  HandleCLight: {
    new(_0: CLight | null): HandleCLight;
  };
  NameOfMaterial: {Brass: NameOfMaterialValue<0>, Bronze: NameOfMaterialValue<1>, Copper: NameOfMaterialValue<2>, Gold: NameOfMaterialValue<3>, Pewter: NameOfMaterialValue<4>, Plastered: NameOfMaterialValue<5>, Plastified: NameOfMaterialValue<6>, Silver: NameOfMaterialValue<7>, Steel: NameOfMaterialValue<8>, Stone: NameOfMaterialValue<9>, ShinyPlastified: NameOfMaterialValue<10>, Satin: NameOfMaterialValue<11>, Metalized: NameOfMaterialValue<12>, Ionized: NameOfMaterialValue<13>, Chrome: NameOfMaterialValue<14>, Aluminum: NameOfMaterialValue<15>, Obsidian: NameOfMaterialValue<16>, Neon: NameOfMaterialValue<17>, Jade: NameOfMaterialValue<18>, Charcoal: NameOfMaterialValue<19>, Water: NameOfMaterialValue<20>, Glass: NameOfMaterialValue<21>, Diamond: NameOfMaterialValue<22>, Transparent: NameOfMaterialValue<23>, DEFAULT: NameOfMaterialValue<24>, UserDefined: NameOfMaterialValue<25>};
  HandleTexture2D: {
    new(_0: Texture2D | null): HandleTexture2D;
  };
  TextureMap: {};
  Texture2D: {
    new(_0: HandleImagePixMap): Texture2D;
  };
  HandleTextureMap: {
    new(_0: TextureMap | null): HandleTextureMap;
  };
  HandleShaderProgram: {
    new(_0: ShaderProgram | null): HandleShaderProgram;
  };
  HandleShaderObject: {
    new(_0: ShaderObject | null): HandleShaderObject;
  };
  TypeOfBackfacingModel: {Auto: TypeOfBackfacingModelValue<0>, DoubleSided: TypeOfBackfacingModelValue<1>, BackCulled: TypeOfBackfacingModelValue<2>, FrontCulled: TypeOfBackfacingModelValue<3>};
  TypeOfShaderObject: {VERTEX: TypeOfShaderObjectValue<1>, TESS_CONTROL: TypeOfShaderObjectValue<2>, TESS_EVALUATION: TypeOfShaderObjectValue<4>, GEOMETRY: TypeOfShaderObjectValue<8>, FRAGMENT: TypeOfShaderObjectValue<16>, COMPUTE: TypeOfShaderObjectValue<32>};
  ImageFormat: {UNKNOWN: ImageFormatValue<0>, Gray: ImageFormatValue<1>, Alpha: ImageFormatValue<2>, RGB: ImageFormatValue<3>, BGR: ImageFormatValue<4>, RGB32: ImageFormatValue<5>, BGR32: ImageFormatValue<6>, RGBA: ImageFormatValue<7>, BGRA: ImageFormatValue<8>, GrayF: ImageFormatValue<9>, AlphaF: ImageFormatValue<10>, RGF: ImageFormatValue<11>, RGBF: ImageFormatValue<12>, BGRF: ImageFormatValue<13>, RGBAF: ImageFormatValue<14>, GrayF_half: ImageFormatValue<16>, RGF_half: ImageFormatValue<17>, RGBAF_half: ImageFormatValue<18>, Gray16: ImageFormatValue<19>};
  ImagePixMap: {};
  HandleImagePixMap: {};
  MessageAlert: {};
  HandleMessageAlert: {
    new(_0: MessageAlert | null): HandleMessageAlert;
  };
  MessageGravity: {Trace: MessageGravityValue<0>, Info: MessageGravityValue<1>, Warning: MessageGravityValue<2>, Alarm: MessageGravityValue<3>, Fail: MessageGravityValue<4>};
  MessageMsg: {
    new(): MessageMsg;
  };
  ProgressRange: {
    new(): ProgressRange;
  };
  MessageReport: {
    new(): MessageReport;
  };
  HandleMessageReport: {
    new(_0: MessageReport | null): HandleMessageReport;
  };
  ListOfInt: {
    new(): ListOfInt;
  };
  ListOfShape: {
    new(): ListOfShape;
  };
  ListOfFilter: {
    new(): ListOfFilter;
  };
  ListOfSystemFont: {
    new(): ListOfSystemFont;
  };
  ListOfMessageAlert: {
    new(): ListOfMessageAlert;
  };
  BaseList: {};
  NCollectionBaseAllocator: {};
  HandleNCollectionBaseAllocator: {
    new(_0: NCollectionBaseAllocator | null): HandleNCollectionBaseAllocator;
  };
  Array1OfPnt2d: {
    new(_0: number, _1: number): Array1OfPnt2d;
  };
  Array1OfInteger: {
    new(_0: number, _1: number): Array1OfInteger;
  };
  IndexedMapOfObject: {
    new(): IndexedMapOfObject;
  };
  IndexedMapOfOwner: {
    new(): IndexedMapOfOwner;
  };
  SharedIndexedMapOfOwner: {
    new(): SharedIndexedMapOfOwner;
  };
  HandleSharedIndexedMapOfOwner: {};
  DefaultHasherOfEntityOwner: {};
  NCollectionUtf8String: {
    new(): NCollectionUtf8String;
  };
  TListIteratorOfShape: {
    new(): TListIteratorOfShape;
    new(_0: ListOfShape): TListIteratorOfShape;
  };
  OpenGlGraphicDriver: {
    new(_0: HandleDisplayConnection, _1: boolean): OpenGlGraphicDriver;
  };
  HandleOpenGlGraphicDriver: {
    new(_0: OpenGlGraphicDriver | null): HandleOpenGlGraphicDriver;
  };
  DatumAspect: {
    new(): DatumAspect;
  };
  HandleDatumAspect: {
    new(_0: DatumAspect | null): HandleDatumAspect;
  };
  HandleDrawer: {
    new(_0: Drawer | null): HandleDrawer;
  };
  LineAspect: {
    new(_0: Color, _1: TypeOfLine, _2: number): LineAspect;
  };
  HandleLineAspect: {
    new(_0: LineAspect | null): HandleLineAspect;
  };
  PointAspect: {
    new(_0: Color, _1: number, _2: number, _3: HandleHArray1OfByte): PointAspect;
    new(_0: TypeOfMarker, _1: Color, _2: number): PointAspect;
  };
  HandlePointAspect: {
    new(_0: PointAspect | null): HandlePointAspect;
  };
  ShadingAspect: {
    new(): ShadingAspect;
  };
  HandleShadingAspect: {
    new(_0: ShadingAspect | null): HandleShadingAspect;
  };
  TextAspect: {
    new(): TextAspect;
  };
  HandleTextAspect: {
    new(_0: TextAspect | null): HandleTextAspect;
  };
  TypeOfHighlight: {None: TypeOfHighlightValue<0>, Selected: TypeOfHighlightValue<1>, Dynamic: TypeOfHighlightValue<2>, LocalSelected: TypeOfHighlightValue<3>, LocalDynamic: TypeOfHighlightValue<4>, SubIntensity: TypeOfHighlightValue<5>, NB: TypeOfHighlightValue<6>};
  Prs3dRoot: {};
  Prs3dArrow: {
    drawShaded(_0: Ax1, _1: number, _2: number, _3: number, _4: number, _5: number): HandleArrayOfTriangles;
    drawSegments(_0: Pnt, _1: Dir, _2: number, _3: number, _4: number): HandleArrayOfSegments;
    draw(_0: HandleGroup, _1: Pnt, _2: Dir, _3: number, _4: number): void;
  };
  Prs3dBndBox: {
    add(_0: HandleStructure, _1: Box, _2: HandleDrawer): void;
  };
  Prs3dText: {
    draw(_0: HandleGroup, _1: HandleTextAspect, _2: ExtendedString, _3: Pnt): Handle_Graphic3d_Text;
    draw(_0: HandleGroup, _1: HandleTextAspect, _2: ExtendedString, _3: Ax2, _4: boolean): Handle_Graphic3d_Text;
  };
  Prs3dToolQuadric: {};
  Prs3dToolCylinder: {
    new(_0: number, _1: number, _2: number, _3: number, _4: number): Prs3dToolCylinder;
    create(_0: number, _1: number, _2: number, _3: number, _4: number, _5: Trsf): HandleArrayOfTriangles;
  };
  Prs3dToolDisk: {
    new(_0: number, _1: number, _2: number, _3: number): Prs3dToolDisk;
    create(_0: number, _1: number, _2: number, _3: number, _4: Trsf): HandleArrayOfTriangles;
  };
  Prs3dToolSector: {
    new(_0: number, _1: number, _2: number): Prs3dToolSector;
    create(_0: number, _1: number, _2: number, _3: Trsf): HandleArrayOfTriangles;
  };
  Prs3dToolSphere: {
    new(_0: number, _1: number, _2: number): Prs3dToolSphere;
    create(_0: number, _1: number, _2: number, _3: Trsf): HandleArrayOfTriangles;
  };
  Prs3dToolTorus: {
    new(_0: number, _1: number, _2: number, _3: number): Prs3dToolTorus;
    new(_0: number, _1: number, _2: number, _3: number, _4: number): Prs3dToolTorus;
    new(_0: number, _1: number, _2: number, _3: number, _4: number, _5: number): Prs3dToolTorus;
    new(_0: number, _1: number, _2: number, _3: number, _4: number, _5: number, _6: number): Prs3dToolTorus;
    create(_0: number, _1: number, _2: number, _3: number, _4: Trsf): HandleArrayOfTriangles;
    create(_0: number, _1: number, _2: number, _3: number, _4: number, _5: Trsf): HandleArrayOfTriangles;
    create(_0: number, _1: number, _2: number, _3: number, _4: number, _5: number, _6: Trsf): HandleArrayOfTriangles;
    create(_0: number, _1: number, _2: number, _3: number, _4: number, _5: number, _6: number, _7: Trsf): HandleArrayOfTriangles;
  };
  HandlePresentableObject: {
    new(_0: PresentableObject | null): HandlePresentableObject;
  };
  HandlePresentationManager: {
    new(_0: PresentationManager | null): HandlePresentationManager;
  };
  TypeOfPresentation3d: {AllView: TypeOfPresentation3dValue<0>, ProjectorDependent: TypeOfPresentation3dValue<1>};
  Color: {
    new(_0: number, _1: number, _2: number, _3: TypeOfColor): Color;
  };
  ColorRGBA: {
    new(): ColorRGBA;
    new(_0: Color): ColorRGBA;
    new(_0: Color, _1: number): ColorRGBA;
    new(_0: number, _1: number, _2: number, _3: number): ColorRGBA;
  };
  TypeOfColor: {RGB: TypeOfColorValue<0>, SRGB: TypeOfColorValue<1>, HLS: TypeOfColorValue<2>, CIELab: TypeOfColorValue<3>, CIELch: TypeOfColorValue<4>};
  HandleSensitiveEntity: {
    new(_0: SensitiveEntity | null): HandleSensitiveEntity;
  };
  HandleSensitivePrimitiveArray: {
    new(_0: SensitivePrimitiveArray | null): HandleSensitivePrimitiveArray;
  };
  HandleSensitiveSet: {
    new(_0: SensitiveSet | null): HandleSensitiveSet;
  };
  HandleSensitiveGroup: {
    new(_0: SensitiveGroup | null): HandleSensitiveGroup;
  };
  HandleSensitivePoint: {
    new(_0: SensitivePoint | null): HandleSensitivePoint;
  };
  HandleSensitiveSegment: {
    new(_0: SensitiveSegment | null): HandleSensitiveSegment;
  };
  HandleSelectableObject: {
    new(_0: SelectableObject | null): HandleSelectableObject;
  };
  HandleSelection: {
    new(_0: Selection | null): HandleSelection;
  };
  HandleEntityOwner: {
    new(_0: EntityOwner | null): HandleEntityOwner;
  };
  FilterType: {AND: FilterTypeValue<0>, OR: FilterTypeValue<1>};
  HandleSelectMgrFilter: {
    new(_0: SelectMgrFilter | null): HandleSelectMgrFilter;
  };
  PickingStrategy: {FirstAcceptable: PickingStrategyValue<0>, OnlyTopmost: PickingStrategyValue<1>};
  HandleSelectionManager: {
    new(_0: SelectionManager | null): HandleSelectionManager;
  };
  Failure: {
    new(): Failure;
  };
  Transient: {
    new(): Transient;
  };
  Sewing: {
    new(_0: number, _1: boolean, _2: boolean, _3: boolean, _4: boolean): Sewing;
  };
  DiscretRoot: {};
  IncrementalMesh: {
    new(): IncrementalMesh;
    new(_0: Shape, _1: number, _2: boolean, _3: number, _4: boolean): IncrementalMesh;
  };
  TextFormatter: {};
  FontMgr: {
    getInstance(): HandleFontMgr;
  };
  SystemFont: {
    getInstance(_0: EmbindString): SystemFont;
  };
  Geometry: {};
  Point: {};
  CartesianPoint: {
    new(_0: Pnt): CartesianPoint;
    new(_0: number, _1: number, _2: number): CartesianPoint;
  };
  Curve: {};
  BoundedCurve: {};
  TrimmedCurve: {};
  BSplineCurve: {};
  Conic: {};
  Circle: {
    new(_0: Circ): Circle;
    new(_0: Ax2, _1: number): Circle;
  };
  Ellipse: {
    new(_0: Ax2, _1: number, _2: number): Ellipse;
  };
  Line: {
    new(_0: Lin): Line;
    new(_0: Pnt, _1: Dir): Line;
  };
  Surface: {};
  ElementarySurface: {};
  CylindricalSurface: {
    new(_0: Ax3, _1: number): CylindricalSurface;
  };
  Plane: {
    new(_0: Pnt, _1: Dir): Plane;
    new(_0: number, _1: number, _2: number, _3: number): Plane;
  };
  ConicalSurface: {
    new(_0: Cone): ConicalSurface;
    new(_0: Ax3, _1: number, _2: number): ConicalSurface;
  };
  BoundedSurface: {};
  RectangularTrimmedSurface: {
    new(_0: HandleSurface, _1: number, _2: number, _3: number, _4: number, _5: boolean, _6: boolean): RectangularTrimmedSurface;
  };
  Geometry2D: {};
  Curve2D: {};
  Conic2D: {};
  Circle2D: {
    new(_0: Circ2d): Circle2D;
    new(_0: Ax2d, _1: number, _2: boolean): Circle2D;
    new(_0: Ax22d, _1: number): Circle2D;
  };
  Line2D: {
    new(_0: Lin2d): Line2D;
    new(_0: Pnt2d, _1: Dir2d): Line2D;
  };
  Aspects: {
    new(): Aspects;
  };
  AspectLine3d: {
    new(): AspectLine3d;
  };
  AspectMarker3d: {
    new(_0: HandleImagePixMap): AspectMarker3d;
  };
  AspectText3d: {
    new(): AspectText3d;
    getInstance(_0: Color, _1: EmbindString, _2: number, _3: number, _4: TypeOfStyleText, _5: TypeOfDisplayText): AspectText3d;
  };
  AspectFillArea3d: {
    new(): AspectFillArea3d;
    new(_0: InteriorStyle, _1: Color, _2: Color, _3: TypeOfLine, _4: number, _5: MaterialAspect, _6: MaterialAspect): AspectFillArea3d;
  };
  Structure: {
    new(_0: HandleStructureManager, _1: HandleStructure): Structure;
  };
  PresentationShadow: {
    new(_0: HandleStructureManager, _1: HandleStructure): PresentationShadow;
  };
  StructureManager: {
    new(_0: HandleGraphicDriver): StructureManager;
  };
  PresentationAttributes: {
    new(): PresentationAttributes;
  };
  Drawer: {
    new(): Drawer;
  };
  SequenceOfHClipPlane: {
    new(): SequenceOfHClipPlane;
  };
  Group: {};
  ArrayOfPrimitives: {
    createArray(_0: TypeOfPrimitiveArray, _1: number, _2: number, _3: number): HandleArrayOfPrimitives;
    createArray(_0: TypeOfPrimitiveArray, _1: number, _2: number, _3: number, _4: number): HandleArrayOfPrimitives;
  };
  ArrayOfTriangles: {
    new(_0: number, _1: number, _2: number): ArrayOfTriangles;
    new(_0: number, _1: number, _2: boolean, _3: boolean, _4: boolean): ArrayOfTriangles;
  };
  ArrayOfTrianglesExtend: {
    new(_0: number, _1: number, _2: boolean, _3: boolean, _4: boolean): ArrayOfTrianglesExtend;
  };
  ArrayOfSegments: {
    new(_0: number, _1: number, _2: boolean): ArrayOfSegments;
  };
  ArrayOfSegmentsExtend: {
    new(_0: number, _1: number, _2: boolean): ArrayOfSegmentsExtend;
  };
  Graphic3d_Text: {
    new(_0: number): Graphic3d_Text;
  };
  CLight: {
    new(_0: TypeOfLightSource): CLight;
  };
  ShaderProgram: {
    new(): ShaderProgram;
  };
  ShaderObject: {
    createFromSource(_0: TypeOfShaderObject, _1: EmbindString): HandleShaderObject;
  };
  NCollectionBuffer: {};
  Graphic3dBuffer: {};
  IndexBuffer: {};
  PresentableObject: {};
  SelectableObject: {};
  InteractiveObject: {
    implement(_0: any): AbstractInteractiveObject;
    extend(_0: EmbindString, _1: any): any;
  };
  AbstractInteractiveObject: {};
  InteractivePoint: {
    new(_0: HandlePoint): InteractivePoint;
  };
  InteractiveCircle: {
    new(_0: HandleGeomCircle): InteractiveCircle;
    new(_0: HandleGeomCircle, _1: number, _2: number, _3: boolean): InteractiveCircle;
  };
  MultipleConnectedInteractive: {
    new(): MultipleConnectedInteractive;
  };
  InteractiveLine: {
    new(_0: HandleGeomLine): InteractiveLine;
    new(_0: HandlePoint, _1: HandlePoint): InteractiveLine;
  };
  AISShape: {
    new(_0: Shape): AISShape;
  };
  InteractiveShape: {
    new(_0: Shape): InteractiveShape;
    new(_0: Shape, _1: EmbindString): InteractiveShape;
  };
  ViewCube: {
    new(): ViewCube;
  };
  TextLabel: {
    new(): TextLabel;
    implement(_0: any): AbstractTextLabel;
    extend(_0: EmbindString, _1: any): any;
  };
  AbstractTextLabel: {};
  PresentationManager: {
    new(_0: HandleStructureManager): PresentationManager;
  };
  SensitiveEntity: {};
  SensitiveSet: {};
  SensitivePrimitiveArray: {
    new(_0: HandleEntityOwner): SensitivePrimitiveArray;
  };
  SensitiveGroup: {
    new(_0: HandleEntityOwner, _1: boolean): SensitiveGroup;
  };
  SensitivePoint: {
    new(_0: HandleEntityOwner, _1: Pnt): SensitivePoint;
  };
  SensitiveSegment: {
    new(_0: HandleEntityOwner, _1: Pnt, _2: Pnt): SensitiveSegment;
  };
  Selection: {};
  EntityOwner: {
    new(_0: number): EntityOwner;
    new(_0: HandleSelectableObject, _1: number): EntityOwner;
    implement(_0: any): EntityOwnerExtend;
    extend(_0: EmbindString, _1: any): any;
  };
  EntityOwnerExtend: {};
  SelectMgrFilter: {};
  SelectMgrFilterWrapper: {
    new(_0: any, _1: any): SelectMgrFilterWrapper;
  };
  SelectionManager: {};
  HandleTransient: {
    new(_0: Transient | null): HandleTransient;
  };
  BRepFont: {
    new(): BRepFont;
    new(_0: NCollectionUtf8String, _1: number, _2: number): BRepFont;
  };
  HandleBRepFont: {
    new(): HandleBRepFont;
    new(_0: BRepFont | null): HandleBRepFont;
  };
  BRepTextBuilder: {
    new(): BRepTextBuilder;
  };
  ShadedShape: {
    triangulation(_0: Shape, _1: number, _2: number): HandleArrayOfTriangles;
  };
  ToolTriangulatedShape: {
    getDeflection(_0: Shape, _1: HandleDrawer): number;
  };
  Volume: {Autodetection: VolumeValue<0>, Closed: VolumeValue<1>, Opened: VolumeValue<2>};
  WFShape: {
    edges(_0: Shape, _1: number, _2: number): HandleArrayOfPrimitives;
  };
  BRepSelectionTool: {
    load(_0: HandleSelection, _1: Shape, _2: ShapeEnum, _3: number, _4: number, _5: boolean, _6: number, _7: number, _8: number): void;
    load(_0: HandleSelection, _1: HandleSelectableObject, _2: Shape, _3: ShapeEnum, _4: number, _5: number, _6: boolean, _7: number, _8: number, _9: number): void;
    computeSensitive(_0: Shape, _1: HandleEntityOwner, _2: HandleSelection, _3: number, _4: number, _5: number, _6: number, _7: boolean): void;
  };
  ViewerSelector3d: {};
  HandleViewerSelector3d: {};
  WireOrder: {
    new(): WireOrder;
  };
  ShapeFix_Shape: {
    new(): ShapeFix_Shape;
    new(_0: Shape): ShapeFix_Shape;
  };
  ShapeFix_ShapeTolerance: {
    new(): ShapeFix_ShapeTolerance;
  };
  ShapeFix_Solid: {
    new(): ShapeFix_Solid;
    new(_0: Solid): ShapeFix_Solid;
  };
  ShapeFix_Wire: {
    new(): ShapeFix_Wire;
    new(_0: Wire, _1: Face, _2: number): ShapeFix_Wire;
  };
  UnifySameDomain: {
    new(): UnifySameDomain;
    new(_0: Shape, _1: boolean, _2: boolean, _3: boolean): UnifySameDomain;
  };
  ExtendedString: {
    new(): ExtendedString;
    input(_0: EmbindString): ExtendedString;
  };
  AsciiString: {
    new(): AsciiString;
  };
  Array1OfByte: {};
  HArray1OfByte: {
    new(_0: number, _1: number): HArray1OfByte;
  };
  HandleHArray1OfByte: {
    new(_0: HArray1OfByte | null): HandleHArray1OfByte;
  };
  IndexedDataMapOfStringString: {
    new(): IndexedDataMapOfStringString;
  };
  ShapeEnum: {COMPOUND: ShapeEnumValue<0>, COMPSOLID: ShapeEnumValue<1>, SOLID: ShapeEnumValue<2>, SHELL: ShapeEnumValue<3>, FACE: ShapeEnumValue<4>, WIRE: ShapeEnumValue<5>, EDGE: ShapeEnumValue<6>, VERTEX: ShapeEnumValue<7>, SHAPE: ShapeEnumValue<8>};
  TopAbsState: {IN: TopAbsStateValue<0>, OUT: TopAbsStateValue<1>, ON: TopAbsStateValue<2>, UNKNOWN: TopAbsStateValue<3>};
  Explorer: {
    new(): Explorer;
    new(_0: Shape, _1: ShapeEnum, _2: ShapeEnum): Explorer;
  };
  TopExp: {
    vertices(_0: Wire, _1: Vertex, _2: Vertex): void;
    firstVertex(_0: Edge, _1: boolean): Vertex;
    lastVertex(_0: Edge, _1: boolean): Vertex;
    vertices(_0: Edge, _1: Vertex, _2: Vertex, _3: boolean): void;
  };
  Location: {
    new(): Location;
    new(_0: Trsf): Location;
  };
  TopoDs: {
    compound(_0: Shape): Compound;
    compSolid(_0: Shape): CompSolid;
    edge(_0: Shape): Edge;
    face(_0: Shape): Face;
    shell(_0: Shape): Shell;
    solid(_0: Shape): Solid;
    vertex(_0: Shape): Vertex;
    wire(_0: Shape): Wire;
  };
  Shape: {
    new(): Shape;
  };
  Compound: {
    new(): Compound;
  };
  CompSolid: {
    new(): CompSolid;
  };
  Edge: {
    new(): Edge;
    helixSurface(_0: HandleSurface, _1: number, _2: number, _3: number): Edge;
  };
  Face: {
    new(): Face;
  };
  Shell: {
    new(): Shell;
  };
  Solid: {
    new(): Solid;
  };
  Vertex: {
    new(): Vertex;
  };
  Wire: {
    new(): Wire;
    buildShapeByTopAndBottomWires(_0: Wire, _1: Wire): Shape;
  };
  TopoDSBuilder: {
    new(): TopoDSBuilder;
  };
  Builder: {
    new(): Builder;
  };
  AmbientLight: {
    new(_0: Color): AmbientLight;
  };
  HandleAmbientLight: {
    new(_0: AmbientLight | null): HandleAmbientLight;
  };
  DirectionalLight: {
    new(_0: Dir, _1: Color, _2: boolean): DirectionalLight;
  };
  HandleDirectionalLight: {
    new(_0: DirectionalLight | null): HandleDirectionalLight;
  };
  HandlePositionalLight: {
    new(_0: PositionalLight | null): HandlePositionalLight;
  };
  PositionLight: {};
  PositionalLight: {
    new(_0: Pnt, _1: Color): PositionalLight;
  };
  HandlePositionLight: {};
  TypeOfOrientation: {AxoLeft: TypeOfOrientationValue<24>, AxoRight: TypeOfOrientationValue<19>, Front: TypeOfOrientationValue<4>, Back: TypeOfOrientationValue<1>, Top: TypeOfOrientationValue<2>, Bottom: TypeOfOrientationValue<5>, Left: TypeOfOrientationValue<3>, Right: TypeOfOrientationValue<0>, XposYpos: TypeOfOrientationValue<6>, XposZpos: TypeOfOrientationValue<7>, YposZpos: TypeOfOrientationValue<8>};
  TypeOfView: {ORTHOGRAPHIC: TypeOfViewValue<0>, PERSPECTIVE: TypeOfViewValue<1>};
  View: {
    new(_0: HandleViewer, _1: TypeOfView): View;
  };
  HandleView: {
    new(_0: View | null): HandleView;
  };
  Viewer: {
    new(_0: HandleGraphicDriver): Viewer;
  };
  HandleViewer: {
    new(_0: Viewer | null): HandleViewer;
  };
  WasmWindow: {
    new(_0: number, _1: number): WasmWindow;
  };
  CustomUtils: {
    buildShapeByTopAndBottomWires(_0: Wire, _1: Wire): Shape;
    getStartPoint(_0: Edge): Pnt;
    getEndPoint(_0: Edge): Pnt;
    buildCycclinderSurface(_0: Pnt, _1: Pnt, _2: Dir): HandleSurface;
    calFaceCenterNormal(_0: Face): Vec;
    calFaceNormal(_0: Face): Dir;
    intersectFaces(_0: Face, _1: Face): Edge;
    intersectFacesToList(_0: Face, _1: Face): VectorEdge;
    crossByPrismFace(_0: Face, _1: Face, _2: Vec): Wire;
    edgeIntersection(_0: Edge, _1: Edge): boolean;
    faceIntersection(_0: Face, _1: Face): boolean;
    faceIntersectionWithEdge(_0: Face, _1: Edge): boolean;
    isFaceCompletelyInside(_0: Face, _1: Face): boolean;
    getFailure(_0: number): Failure | null;
    getPointonEdge(_0: Edge, _1: number): Pnt;
    buildConicalSurface(_0: Ax3, _1: number, _2: number): HandleSurface;
    toString(_0: Shape): string;
    fromString(_0: EmbindString): Shape;
    getCustomProgramFont(_0: EmbindString, _1: EmbindString): HandleShaderProgram;
  };
  OffsetWire2: {
    new(_0: Wire, _1: number): OffsetWire2;
    new(_0: Wire, _1: Edge, _2: number): OffsetWire2;
  };
  VectorEdgeOffset: {
    new(): VectorEdgeOffset;
  };
  VectorResultWire: {
    new(): VectorResultWire;
  };
  OffsetWire3: {
    new(_0: VectorEdgeOffset): OffsetWire3;
  };
  createImagePixMapFromBuffer(_0: any, _1: number, _2: number, _3: ImageFormat): HandleImagePixMap;
  createSelectMgrFilter(_0: any, _1: any): HandleSelectMgrFilter;
}

export type MainModule = WasmModule & typeof RuntimeExports & EmbindModule;
export default function MainModuleFactory (options?: unknown): Promise<MainModule>;
