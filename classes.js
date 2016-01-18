// Classes are a simple sugar over the prototype-based OO pattern

class SkinnedMesh extends THREE.mesh {
    constructor(geometry, materials) {
        super(geometry, materials);

        this.idMatrix = SkinnedMesh.defaultMatrix();
        this.bones = [];
    }

    update(camera) {
        super.update();
    }

    static defaultMatrix() {
        return new THREE.Matrix4()
    }
}
