import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import { ThreeElements } from '@react-three/fiber';

declare module 'meshline' {
    export const MeshLineGeometry: any;
    export const MeshLineMaterial: any;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            meshLineGeometry: ThreeElements['mesh'] & {
                geometry?: any;
                args?: any;
            };
            meshLineMaterial: ThreeElements['material'] & {
                attach?: string;
                color?: string;
                depthTest?: boolean;
                resolution?: [number, number];
                lineWidth?: number;
                useMap?: boolean;
                map?: any;
                repeat?: [number, number];
            };
        }
    }
}

export {};
