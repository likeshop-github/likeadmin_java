package com.mdd.admin.config;

import cn.dev33.satoken.exception.NotLoginException;
import cn.dev33.satoken.exception.NotPermissionException;
import com.mdd.common.core.AjaxResult;
import com.mdd.common.enums.HttpEnum;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Sa-Token的异常拦截
 */
@Slf4j
@ControllerAdvice
public class StpInException {

    /**
     * 拦截登录异常
     */
    @ResponseStatus(HttpStatus.OK)
    @ExceptionHandler(NotLoginException.class)
    @ResponseBody
    public AjaxResult<Object> handleNotLoginException(){
        return AjaxResult.failed(HttpEnum.TOKEN_INVALID.getCode(), HttpEnum.TOKEN_INVALID.getMsg());
    }

    /**
     * 拦截权限异常
     */
    @ResponseStatus(HttpStatus.OK)
    @ExceptionHandler(NotPermissionException.class)
    @ResponseBody
    public AjaxResult<Object> handleNotPermissionException(){
        return AjaxResult.failed(HttpEnum.NO_PERMISSION.getCode(), HttpEnum.NO_PERMISSION.getMsg());
    }

}
