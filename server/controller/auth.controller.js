const authService = require('../service/auth.service');

class AuthController {
  async login(req, res) {
    try {
      const { emailOrPhone, password } = req.body;
      const data = await authService.login(emailOrPhone, password);

      res.cookie('refreshToken', data.refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      return res.json(data);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
      console.log(error);
    }
  }

  async register(req, res) {
    try {
      const { emailOrPhone } = req.body;

      if (!emailOrPhone) {
        return res.status(400).json({ message: 'Email or phone is required' });
      }


      const data = await authService.register(emailOrPhone);

      res.cookie('refreshToken', data.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      return res.status(201).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message || 'Server error' });
    }
  }

  async activation(req, res) {
    try {
      const userId = req.params.id;

      await authService.activation(userId);

      return res.redirect(process.env.CLIENT_URL);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
      console.log(error);
    }
  }

  async logout(req, res) {
    try {
      const { refreshToken } = req.cookies;

      const token = await authService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
      console.log(error);
    }
  }
}

module.exports = new AuthController();
