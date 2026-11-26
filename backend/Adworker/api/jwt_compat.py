"""Drop-in replacement for the retired ``djangorestframework-jwt`` login view.

The frontend posts ``{"username", "password"}`` to ``api/auth/token-auth/`` and
reads ``response.token``. This keeps that contract while issuing tokens with
``djangorestframework-simplejwt``, which the rest of the API already uses.
"""
from rest_framework_simplejwt.views import TokenObtainPairView


class ObtainJSONWebToken(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == 200 and 'access' in response.data:
            response.data['token'] = response.data['access']
        return response


obtain_jwt_token = ObtainJSONWebToken.as_view()
