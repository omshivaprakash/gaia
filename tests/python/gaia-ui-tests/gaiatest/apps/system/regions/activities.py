# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

from marionette.by import By
from gaiatest.apps.base import Base
from marionette import Wait
from marionette import expected


class Activities(Base):

    _actions_menu_locator = (By.CSS_SELECTOR, 'form[data-type="action"]')
    _action_option_locator = (By.CSS_SELECTOR, 'form[data-type="action"] button')
    _activity_window_locator = (By.CLASS_NAME, 'activityWindow')

    _wallpaper_button_locator = (By.XPATH, "//*[text()='Wallpaper']")
    _gallery_button_locator = (By.XPATH, '//*[text()="Gallery"]')
    _camera_button_locator = (By.XPATH, '//*[text()="Camera"]')
    _cancel_button_locator = (By.CSS_SELECTOR, 'form[data-type="action"] button[data-action="cancel"]')

    _save_image_locator = (By.CSS_SELECTOR, 'button[data-id="save-image"]')

    def __init__(self, marionette):
        Base.__init__(self, marionette)
        self.marionette.switch_to_frame()
        view = self.marionette.find_element(*self._actions_menu_locator)
        Wait(self.marionette).until(lambda m: view.location['y'] == 0)

    def tap_wallpaper(self):
        self.marionette.find_element(*self._wallpaper_button_locator).tap()
        self.wait_for_element_not_displayed(*self._actions_menu_locator)
        from gaiatest.apps.wallpaper.app import Wallpaper
        wallpaper = Wallpaper(self.marionette)
        self.wait_for_condition(lambda m: self.apps.displayed_app.name == wallpaper.name)
        self.apps.switch_to_displayed_app()
        return wallpaper

    def tap_gallery(self):
        self.marionette.find_element(*self._gallery_button_locator).tap()
        self.wait_for_element_not_displayed(*self._actions_menu_locator)
        from gaiatest.apps.gallery.app import Gallery
        gallery = Gallery(self.marionette)
        self.wait_for_condition(lambda m: self.apps.displayed_app.name == gallery.name)
        self.apps.switch_to_displayed_app()
        return gallery

    def tap_camera(self):
        self.marionette.find_element(*self._camera_button_locator).tap()
        self.wait_for_element_not_displayed(*self._actions_menu_locator)
        from gaiatest.apps.camera.app import Camera
        camera = Camera(self.marionette)
        self.wait_for_condition(lambda m: self.apps.displayed_app.name == camera.name)
        self.apps.switch_to_displayed_app()
        camera.wait_for_capture_ready()
        return camera

    def tap_cancel(self):
        self.marionette.find_element(*self._cancel_button_locator).tap()
        self.wait_for_element_not_displayed(*self._actions_menu_locator)
        self.apps.switch_to_displayed_app()

    def tap_save_image(self):
        Wait(self.marionette).until(expected.element_displayed(
            Wait(self.marionette).until(expected.element_present(*self._save_image_locator))))
        self.marionette.find_element(*self._save_image_locator).tap()

    @property
    def options_count(self):
        return len(self.marionette.find_elements(*self._action_option_locator))

    @property
    def is_menu_visible(self):
        return self.is_element_displayed(*self._actions_menu_locator)
