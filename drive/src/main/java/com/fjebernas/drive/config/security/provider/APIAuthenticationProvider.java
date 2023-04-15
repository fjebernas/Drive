package com.fjebernas.drive.config.security.provider;

import com.fjebernas.drive.config.security.authenticationRequest.APIAuthenticationRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
public class APIAuthenticationProvider implements AuthenticationProvider {

  @Value("${secret.user.key}")
  private String userKey;

  @Value("${secret.guest.key}")
  private String guestKey;

  @Override
  public Authentication authenticate(Authentication authentication) throws AuthenticationException {
    APIAuthenticationRequest authenticationRequest = (APIAuthenticationRequest) authentication;
    String keyRequest = authenticationRequest.getKeyRequest();

    return userKey.equals(keyRequest) ?
            new APIAuthenticationRequest(true, null, List.of("all"))
            :
            guestKey.equals(keyRequest) ?
            new APIAuthenticationRequest(true, null, List.of("read"))
            :
            new APIAuthenticationRequest(false, null, List.of());
  }

  @Override
  public boolean supports(Class<?> authentication) {
    return APIAuthenticationRequest.class.equals(authentication);
  }
}
