import DeviceModel from "../model/Device";

const _ = require("lodash");

class Device {
    static async createDevice(DeviceData) {
        return await new DeviceModel({ ...DeviceData }).save();
    }

    static async getDevices() {
        let devices = await DeviceModel.find().sort("name");
        return devices.map(Device => {
            devices = _.pick(Device, ["name", "surname", "phone", "registration_date"]);
        });
    }

    static async getDevice(id) {
        let device = await DeviceModel.findById(id);
        device = _.pick(device, ["name", "serialNumber"]);
        return device;
    }

    static async updateDevice(id, DeviceData) {
        return await DeviceModel.findByIdAndUpdate(
            id,
            { ...DeviceData },
            { new: true }
        );
    }

    static async removeDevice(id) {
        return await DeviceModel.findByIdAndRemove(id);
    }

    static findDeviceWithParam(name) {
        const device = DeviceModel.findOne({ name });
        if (!device) ctx.throw(402, "Device not found");
        return Device;
    }
}

module.exports = Device;
