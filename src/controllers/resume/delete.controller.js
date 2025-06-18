import { cloudHelper } from "../../helpers/index.helpers.js";
import { resumeService } from "../../services/index.services.js";

const deleteResume = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message, publicId } = await resumeService.deleteResume(id);
    if (publicId) {
      // Eliminar de cloudinary
      await cloudHelper.deletePdf(publicId);
      return res.status(code).json({ message });
    }

    res.status(code).json({ message });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error interno en el servidor. Intente más tarde",
    });
  }
};

export default deleteResume;
